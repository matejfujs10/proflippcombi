import { useState } from "react";
import combiDoors from "@/assets/combi-doors.jpg";
import BookingDialog from "./BookingDialog";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const PsychologySection = () => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  return (
    <>
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${combiDoors})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-4">{t("psych.eyebrow", lang)}</span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-8 leading-tight">
              {t("psych.h1", lang)} <span className="text-gradient">{t("psych.one", lang)}</span>
            </h2>

            <div className="space-y-2 text-base md:text-lg text-foreground/80 mb-8">
              <p>{t("psych.a1", lang)}</p>
              <p>{t("psych.a2", lang)}</p>
              <p>{t("psych.a3", lang)}</p>
              <p>{t("psych.a4", lang)}</p>
            </div>

            <div className="space-y-2 text-base md:text-lg text-muted-foreground mb-10 italic">
              <p>{t("psych.b1", lang)}</p>
              <p>{t("psych.b2", lang)}</p>
              <p>{t("psych.b3", lang)}</p>
            </div>

            <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">{t("psych.c1", lang)}</p>
            <p className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-10">{t("psych.c2", lang)}</p>

            <button onClick={() => setOpen(true)} className="btn-hero">{t("psych.cta", lang)}</button>
          </div>
        </div>
      </section>
      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default PsychologySection;
