export const SITE = "https://kombi.proflipp.com";

export interface PageSEO {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  /** hreflang code -> path; x-default always added */
  alternates?: Record<string, string>;
  jsonLd?: object[];
  noindex?: boolean;
}

const setAttr = (sel: string, attr: string, val: string) => {
  const el = document.querySelector(sel);
  if (el) el.setAttribute(attr, val);
};

/** Applies per-route head tags. Returns cleanup restoring the original head. */
export const applyPageSEO = (p: PageSEO) => {
  const url = `${SITE}${p.path}`;
  const prevTitle = document.title;
  const saved = ["link[rel=canonical]", 'meta[property="og:url"]', 'meta[name="twitter:url"]', 'meta[name="robots"]']
    .map((s) => [s, document.querySelector(s)?.getAttribute(s.startsWith("link") ? "href" : "content")] as const);
  const prevAlt = Array.from(document.querySelectorAll("link[rel=alternate][hreflang]"));

  document.title = p.title;
  setAttr('meta[name="description"]', "content", p.description);
  if (p.keywords) setAttr('meta[name="keywords"]', "content", p.keywords);
  setAttr("link[rel=canonical]", "href", url);
  setAttr('meta[property="og:url"]', "content", url);
  setAttr('meta[name="twitter:url"]', "content", url);
  setAttr('meta[property="og:title"]', "content", p.title);
  setAttr('meta[property="og:description"]', "content", p.description);
  setAttr('meta[name="twitter:title"]', "content", p.title);
  setAttr('meta[name="twitter:description"]', "content", p.description);
  if (p.noindex) setAttr('meta[name="robots"]', "content", "noindex, follow");

  prevAlt.forEach((l) => l.remove());
  const added: Element[] = [];
  const alts = { ...(p.alternates ?? {}), "x-default": p.alternates ? "/" : p.path };
  Object.entries(alts).forEach(([hl, path]) => {
    const l = document.createElement("link");
    l.rel = "alternate";
    l.hreflang = hl;
    l.href = `${SITE}${path}`;
    document.head.appendChild(l);
    added.push(l);
  });

  (p.jsonLd ?? []).forEach((obj) => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.dataset.pageSeo = "1";
    s.textContent = JSON.stringify({ "@context": "https://schema.org", ...obj });
    document.head.appendChild(s);
    added.push(s);
  });

  return () => {
    document.title = prevTitle;
    saved.forEach(([s, v]) => v != null && setAttr(s, s.startsWith("link") ? "href" : "content", v));
    added.forEach((e) => e.remove());
    prevAlt.forEach((l) => document.head.appendChild(l));
  };
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE}${it.path}` })),
});
