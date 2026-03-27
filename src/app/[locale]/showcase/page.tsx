import { Metadata } from "next";
import { Locale, getDictionary } from "@/i18n/config";
import ShowcaseHero from "@/components/showcase/ShowcaseHero";
import ShowcaseGrid from "@/components/showcase/ShowcaseGrid";
import ShowcaseCTA from "@/components/showcase/ShowcaseCTA";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.showcase.meta.title,
    description: dict.showcase.meta.description,
  };
}

export default async function ShowcasePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <ShowcaseHero dict={dict} />
      <ShowcaseGrid dict={dict} />
      <ShowcaseCTA dict={dict} locale={params.locale} />
    </>
  );
}
