// Playwright E2E scenarios for language detection & persistence.
// Run locally with:  npx playwright test tests/e2e/language.spec.ts
// (Playwright is not installed as a project dependency to keep the bundle small —
//  install it on demand: `npm i -D @playwright/test && npx playwright install chromium`.)
import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "http://localhost:8080";

async function mockGeo(page: any, country: string) {
  await page.route("**/ipapi.co/json/**", (r: any) =>
    r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ country_code: country }) }),
  );
  await page.route("**/ipwho.is/**", (r: any) =>
    r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ country_code: country }) }),
  );
  await page.route("**/geojs.io/**", (r: any) =>
    r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ country: country }) }),
  );
}

test.describe("Language auto-detection", () => {
  for (const [country, expectedHtmlLang] of [["SI", "sl"], ["HR", "hr"], ["AT", "de"], ["DE", "de"]] as const) {
    test(`geo-IP ${country} → html lang="${expectedHtmlLang}"`, async ({ page, context }) => {
      await context.clearCookies();
      await mockGeo(page, country);
      await page.goto(BASE);
      await expect.poll(async () => await page.evaluate(() => document.documentElement.lang)).toBe(expectedHtmlLang);
    });
  }

  test("manual switch persists across reload via cookie", async ({ page, context }) => {
    await context.clearCookies();
    await mockGeo(page, "SI");
    await page.goto(BASE);
    // Click DE in the top-bar language switcher (adjust selector to match TopBar markup).
    await page.getByRole("button", { name: /^DE$/ }).click();
    await expect.poll(async () => await page.evaluate(() => document.documentElement.lang)).toBe("de");
    const cookies = await context.cookies();
    expect(cookies.find((c) => c.name === "lang")?.value).toBe("DE");
    expect(cookies.find((c) => c.name === "lang_manual")?.value).toBe("1");

    // Reload: geo-IP still returns SI but manual DE must win.
    await page.reload();
    await expect.poll(async () => await page.evaluate(() => document.documentElement.lang)).toBe("de");
  });
});
