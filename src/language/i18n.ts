import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

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
    interpolation: {
      escapeValue: false,
    },
  });

// eslint-disable-next-line import/no-default-export
export default i18n;
