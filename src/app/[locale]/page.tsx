import { Locale, getDictionary } from "@/i18n/config";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <TechStack dict={dict} />
      <Projects dict={dict} />
      <Services dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
