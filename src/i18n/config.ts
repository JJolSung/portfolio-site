export const locales = ["en", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = {
  en: () => import("./en.json").then((m) => m.default),
  ja: () => import("./ja.json").then((m) => m.default),
  ko: () => import("./ko.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
