import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { LanguageEnum } from "../../../model/languages/languages";

export const useAppLanguage = (): LanguageEnum => {
  const [searchParams] = useSearchParams();
  const queryLanguage = searchParams.get("language");
  const {
    i18n: { language },
  } = useTranslation();

  const appLanguage = useMemo(
    () => (queryLanguage ? queryLanguage : language) as LanguageEnum,
    [language, queryLanguage]
  );

  return appLanguage;
};
