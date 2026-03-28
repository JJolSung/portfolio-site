import { Metadata } from 'next';
import { Locale, getDictionary } from '@/i18n/config';
import ShowcaseHero from '@/components/showcase/ShowcaseHero';
import ShowcaseGrid from '@/components/showcase/ShowcaseGrid';
import ShowcaseCTA from '@/components/showcase/ShowcaseCTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.showcase.meta.title,
    description: dict.showcase.meta.description,
  };
}

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <ShowcaseHero dict={dict} />
      <ShowcaseGrid dict={dict} />
      <ShowcaseCTA dict={dict} locale={locale} />
    </>
  );
}
