import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { projectsByDate } from "@/data/projects";
import { areaBySlug } from "@/data/areas";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "Eğitim ve fırsat eşitliği, akran desteği, farkındalık ve sosyal destek alanlarında yürüttüğümüz projeler.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.alan) ? params.alan[0] : params.alan;
  // Geçersiz bir alan adı gelirse sessizce "tümü"ne düşeriz.
  const initialArea = raw && areaBySlug(raw) ? raw : "tumu";

  const all = projectsByDate();

  return (
    <>
      <PageHero
        compact
        eyebrow="Projelerimiz"
        title="Birlikte yürüttüğümüz çalışmalar"
        description="Her proje, çevremizde fark ettiğimiz bir ihtiyaçtan yola çıkıyor ve gönüllülerle birlikte yürütülüyor. Çalışmalarımıza katılmak için gönüllü başvurusu yapabilirsiniz."
      >
        <Button href="/gonullu-ol" variant="primary">
          Gönüllü Ol <ArrowIcon className="h-4 w-4" />
        </Button>
      </PageHero>

      <section className="container-x py-14 lg:py-18">
        {all.length > 0 ? (
          <ProjectFilter projects={all} initialArea={initialArea} />
        ) : (
          <Reveal className="rounded-3xl border border-dashed border-sand-300 bg-sand-50 p-16 text-center">
            <p className="font-display text-[24px] font-bold text-ink-950">
              Projelerimiz çok yakında
            </p>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-600">
              İlk projelerimizi hazırlıyoruz. Duyurulduğunda buradan takip edebilirsiniz.
            </p>
            <Button href="/duyurular" variant="outline" className="mt-8">
              Duyurulara göz atın
            </Button>
          </Reveal>
        )}
      </section>
    </>
  );
}
