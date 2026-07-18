import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Development-only overlay that shows the current language, detection source
 * and any diagnostic detail (country / navigator tag). Enabled when:
 *  - import.meta.env.DEV is true, OR
 *  - URL contains ?langdebug=1  (works in preview/prod for quick QA)
 */
const LanguageDebugBadge = () => {
  const { lang, source, detail } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    setVisible(import.meta.env.DEV || qs.get("langdebug") === "1");
  }, []);

  if (!visible) return null;

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-3 left-3 z-[9999] rounded-full bg-black/80 text-white text-xs px-3 py-1 font-mono"
      >
        🌐 {lang}
      </button>
    );
  }

  return (
    <div className="fixed bottom-3 left-3 z-[9999] max-w-xs rounded-lg bg-black/85 text-white text-xs font-mono p-3 shadow-lg border border-white/10">
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="font-bold">🌐 Lang Debug</span>
        <button onClick={() => setMinimized(true)} className="text-white/60 hover:text-white">×</button>
      </div>
      <div>lang: <span className="text-emerald-400">{lang}</span></div>
      <div>source: <span className="text-amber-300">{source}</span></div>
      {detail && <div className="text-white/70 break-all">{detail}</div>}
      <div className="text-white/50 mt-1">html[lang]={typeof document !== "undefined" ? document.documentElement.lang : "?"}</div>
    </div>
  );
};

export default LanguageDebugBadge;
