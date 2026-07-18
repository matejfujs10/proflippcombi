import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

const Probe = () => {
  const { lang, source, setLang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="source">{source}</span>
      <button onClick={() => setLang("DE")}>de</button>
    </div>
  );
};

const flush = () => new Promise((r) => setTimeout(r, 0));

describe("LanguageProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "lang_manual=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    vi.restoreAllMocks();
  });

  it("uses geo-IP country (HR) over navigator language", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ country_code: "HR" }), { status: 200, headers: { "content-type": "application/json" } }) as any,
    );
    render(<LanguageProvider><Probe /></LanguageProvider>);
    await act(async () => { await flush(); });
    expect(screen.getByTestId("lang").textContent).toBe("HR");
    expect(screen.getByTestId("source").textContent).toBe("geo-ip");
  });

  it("maps Austria (AT) → DE", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ country_code: "AT" }), { status: 200 }) as any,
    );
    render(<LanguageProvider><Probe /></LanguageProvider>);
    await act(async () => { await flush(); });
    expect(screen.getByTestId("lang").textContent).toBe("DE");
  });

  it("maps Slovenia (SI) → SL", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ country_code: "SI" }), { status: 200 }) as any,
    );
    render(<LanguageProvider><Probe /></LanguageProvider>);
    await act(async () => { await flush(); });
    expect(screen.getByTestId("lang").textContent).toBe("SL");
  });

  it("persists manual selection to cookie + localStorage and prevents auto-override", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ country_code: "SI" }), { status: 200 }) as any,
    );
    const { unmount } = render(<LanguageProvider><Probe /></LanguageProvider>);
    await act(async () => { await flush(); });
    await act(async () => { screen.getByText("de").click(); });
    expect(screen.getByTestId("lang").textContent).toBe("DE");
    expect(document.cookie).toContain("lang=DE");
    expect(document.cookie).toContain("lang_manual=1");
    expect(localStorage.getItem("preferred-language")).toBe("DE");
    unmount();

    // Re-mount → must stay DE, source=manual, no IP override
    render(<LanguageProvider><Probe /></LanguageProvider>);
    await act(async () => { await flush(); });
    expect(screen.getByTestId("lang").textContent).toBe("DE");
    expect(screen.getByTestId("source").textContent).toBe("manual");
  });
});
