import { motion } from "motion/react";
import { LANGUAGE_OPTIONS, type Language } from "../data/translations";

interface LanguageToggleProps {
  current: Language;
  onChange: (lang: Language) => void;
  compact?: boolean;
}

export function LanguageToggle({
  current,
  onChange,
  compact = false,
}: LanguageToggleProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 border border-border shadow-sm">
        {LANGUAGE_OPTIONS.map((lang) => (
          <motion.button
            key={lang.value}
            onClick={() => onChange(lang.value)}
            whileTap={{ scale: 0.92 }}
            className={`px-2 py-0.5 rounded-full text-xs font-body font-semibold transition-all ${
              current === lang.value
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {lang.nativeLabel}
          </motion.button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {LANGUAGE_OPTIONS.map((lang) => (
        <motion.button
          key={lang.value}
          onClick={() => onChange(lang.value)}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-body font-semibold transition-all border ${
            current === lang.value
              ? "bg-primary text-primary-foreground border-primary shadow-kid"
              : "bg-card text-foreground border-border hover:border-primary/50"
          }`}
        >
          <span>{lang.flag}</span>
          <span>{lang.nativeLabel}</span>
        </motion.button>
      ))}
    </div>
  );
}
