import { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { t, translations } from "@/lib/translations";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingDialog from "@/components/BookingDialog";
import heroImage from "@/assets/combi-sunset-hero.jpg";
import article1 from "@/assets/blog-article-1.jpg";
import article2 from "@/assets/blog-article-2.jpg";
import article3 from "@/assets/blog-article-3.jpg";
import article4 from "@/assets/blog-article-4.jpg";
import gallerySea from "@/assets/gallery-sea-bike.jpg";
import { Send, ChevronRight, Mountain, ParkingSquare, Zap, Compass, Eye, Building2, Activity, Calendar } from "lucide-react";

const ScrollingStrip = () => (
  <div className="overflow-hidden bg-gradient-cta text-primary-foreground py-3 border-y border-border">
    <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="mx-8 font-display tracking-[0.25em] text-sm md:text-base">
          TRAVEL · ENJOY · EXPLORE • Simplicity is the Key! • Freedom on Four Wheels • PROFLIPP KOMBI KAMPER •
        </span>
      ))}
    </div>
  </div>
);

const CtaBlock = ({ title, sub, btn, onClick }: { title: string; sub: string; btn: string; onClick: () => void }) => (
  <div className="rounded-3xl bg-gradient-card border border-border p-10 md:p-14 text-center my-12">
    <p className="font-display text-3xl md:text-5xl text-gradient tracking-wider mb-4">{title}</p>
    <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8">{sub}</p>
    <button onClick={onClick} className="btn-hero">
      <Send size={18} className="mr-2" /> {btn}
    </button>
  </div>
);

const ArticleEnd = () => {
  const { lang } = useLanguage();
  return (
    <div className="border-t border-border mt-10 pt-8 text-center">
      <p className="font-display text-2xl md:text-3xl text-gradient tracking-[0.25em] mb-2">TRAVEL · ENJOY · EXPLORE</p>
      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{t("blog.simplicity", lang)}</p>
      <p className="text-foreground/85">{t("blog.articleEnd1", lang)}</p>
      <p className="text-foreground/85 mb-4">{t("blog.articleEnd2", lang)}</p>
      <p className="font-heading font-bold text-foreground">👉 {t("blog.articleEndCta", lang)}</p>
    </div>
  );
};

const BlogContent = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const articleKeys = ["a1", "a2", "a3", "a4"] as const;
  const covers = [article1, article2, article3, article4];
  const whyKeys: (keyof typeof translations.blog.why)[] = [
    "fuel", "park", "fast", "flex", "hidden", "cities", "sport", "weekend",
  ];
  const whyIcons = [Zap, ParkingSquare, Activity, Compass, Eye, Building2, Mountain, Calendar];
  const microKeys = ["micro1", "micro2", "micro3", "micro4", "micro5"] as const;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${gallerySea})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="relative container mx-auto px-4 text-center max-w-4xl">
            <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition">{t("blog.backHome", lang)}</Link>
            <span className="block section-eyebrow mt-6 mb-4">{t("blog.heroEyebrow", lang)}</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-[0.05em] leading-none mb-4">
              {t("blog.heroTitle", lang)}
            </h1>
            <p className="font-heading text-lg md:text-xl text-gradient tracking-widest mb-6">{t("blog.simplicity", lang)}</p>
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">{t("blog.heroSub", lang)}</p>
          </div>
        </section>

        <ScrollingStrip />

        {/* Microtexts strip */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl">
            {microKeys.map((k) => (
              <div key={k} className="text-center px-3 py-4 rounded-2xl border border-border bg-card/40">
                <p className="text-xs md:text-sm font-heading text-foreground/85">{t(`blog.${k}`, lang)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl space-y-20">
            {articleKeys.map((key, i) => (
              <article key={key} id={`article-${i + 1}`} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <img src={covers[i]} alt="" className={`rounded-3xl object-cover w-full h-72 md:h-96 ${i % 2 ? "md:order-2" : ""}`} loading="lazy" />
                <div>
                  <span className="section-eyebrow">Story {i + 1}</span>
                  <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mt-4 mb-4 leading-tight">
                    {t(`blog.articles.${key}.title`, lang)}
                  </h2>
                  <p className="text-base text-muted-foreground mb-4 italic">{t(`blog.articles.${key}.excerpt`, lang)}</p>
                  <p className="text-foreground/85 leading-relaxed">{t(`blog.articles.${key}.body`, lang)}</p>
                  <ArticleEnd />
                </div>
              </article>
            ))}

            <CtaBlock title={t("blog.block1Title", lang)} sub={t("blog.block1Sub", lang)} btn={t("blog.block1Btn", lang)} onClick={() => setOpen(true)} />

            {/* Why people love compact campers */}
            <div>
              <div className="text-center mb-10">
                <span className="section-eyebrow">SEO</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-4">
                  {t("blog.whyTitle", lang)}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {whyKeys.map((k, i) => {
                  const Icon = whyIcons[i];
                  return (
                    <div key={k} className="card-feature text-center">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <p className="text-sm font-heading font-semibold text-foreground">{t(`blog.why.${k}`, lang)}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <CtaBlock title={t("blog.block2Title", lang)} sub={t("blog.block2Sub", lang)} btn={t("blog.block2Btn", lang)} onClick={() => setOpen(true)} />

            {/* Social proof */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-heading text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
                "{t("blog.socialProof", lang)}"
              </p>
            </div>

            <CtaBlock title={t("blog.block3Title", lang)} sub={t("blog.block3Sub", lang)} btn={t("blog.block3Btn", lang)} onClick={() => setOpen(true)} />
          </div>
        </section>

        <ScrollingStrip />
      </main>

      <Footer />
      <FloatingActions />
      <BookingDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

const Blog = () => (
  <LanguageProvider>
    <BlogContent />
  </LanguageProvider>
);

export default Blog;
