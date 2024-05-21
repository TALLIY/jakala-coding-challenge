import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { suppotedLanguages } from "../../model/languages/languages.ts";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: suppotedLanguages,
    load: "all",
    ns: ["translations"],
    defaultNS: "translations",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
