import { Metadata } from "next";
import { locales, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/config";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const titles: Record<Locale, string> = {
    en: "MyeongSub Kim — Full-Stack AI Developer",
    ja: "キム・ミョンソプ — フルスタック AI デベロッパー",
    ko: "김명섭 — 풀스택 AI 개발자",
  };

  const descriptions: Record<Locale, string> = {
    en: "Full-Stack AI Developer & Founder of MOVA Tech. Building production-ready web & mobile apps at 3-5x speed.",
    ja: "フルスタックAIデベロッパー、MOVA Tech代表。通常の3〜5倍のスピードで本番品質のアプリを構築。",
    ko: "풀스택 AI 개발자, MOVA Tech 대표. 3~5배 빠른 속도로 프로덕션 품질의 앱을 구축합니다.",
  };

  return {
    title: titles[params.locale],
    description: descriptions[params.locale],
    openGraph: {
      title: titles[params.locale],
      description: descriptions[params.locale],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const langMap: Record<Locale, string> = { en: "en", ja: "ja", ko: "ko" };

  return (
    <html lang={langMap[params.locale]} className="dark">
      <body className="noise">
        <Navigation dict={dict} locale={params.locale} />
        <main>{children}</main>
        <Footer dict={dict} />
        <ScrollReveal />
      </body>
    </html>
  );
}
