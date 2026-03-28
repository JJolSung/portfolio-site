import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Outfit,
  JetBrains_Mono,
  Noto_Sans_JP,
  Noto_Sans_KR,
} from 'next/font/google';
import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/config';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-jp',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-kr',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  const titles: Record<Locale, string> = {
    en: 'MyeongSub Kim — Full-Stack AI Developer',
    ja: 'キム・ミョンソプ — フルスタック AI デベロッパー',
    ko: '김명섭. — 풀스택 AI 개발자',
  };

  const descriptions: Record<Locale, string> = {
    en: 'Full-Stack AI Developer & Founder of MOVA Tech Co.,Ltd. Building production-ready web & mobile apps at 3-5x speed.',
    ja: 'フルスタックAIデベロッパー、MOVA Tech Co.,Ltd.代表。通常の3〜5倍のスピードで本番品質のアプリを構築。',
    ko: '풀스택 AI 개발자, 주식회사 모바테크 대표. 3~5배 빠른 속도로 프로덕션 품질의 앱을 구축합니다.',
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const langMap: Record<Locale, string> = { en: 'en', ja: 'ja', ko: 'ko' };

  return (
    <html
      lang={langMap[locale]}
      data-scroll-behavior='smooth'
      className={`${outfit.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}
    >
      <body className='noise'>
        <Navigation dict={dict} locale={locale} />
        <main>{children}</main>
        <Footer dict={dict} />
        <ScrollReveal />
      </body>
    </html>
  );
}
