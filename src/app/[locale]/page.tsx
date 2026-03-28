import { Locale, getDictionary } from '@/i18n/config';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import ShowcasePreview from '@/components/ShowcasePreview';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <About dict={dict} />
      <TechStack dict={dict} />
      <Projects dict={dict} />
      <Services dict={dict} locale={locale} />
      <Contact dict={dict} locale={locale} />
      <ShowcasePreview dict={dict} locale={locale} />
    </>
  );
}
