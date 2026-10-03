import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { projeGetir, projeleriGetir } from "@/lib/projeler";
import { areaBySlug } from "@/data/areas";
import { ArrowIcon, iconMap } from "@/components/Icons";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await projeGetir(slug);
  if (!project) return { title: "Proje bulunamadı" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await projeGetir(slug);
  if (!project) notFound();

  const area = areaBySlug(project.area);
  const AreaIcon = area ? iconMap[area.icon] : null;
  const related = (await projeleriGetir())
    .filter((p) => p.slug !== project.slug && p.area === project.area)
    .slice(0, 3);

  return (
    <>
      {/* Başlık */}
      <section className="relative isolate overflow-hidden bg-ink-950">
        {project.image && (
          <Photo
            src={project.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/94 via-ink-950/80 to-ink-950/45" />
        <div className="container-x py-12 sm:py-20 lg:py-24">
          <Reveal className="max-w-3xl" y={18}>
            <nav
              aria-label="Konum"
              className="flex flex-wrap items-center gap-2 text-[13px] text-sand-400"
            >
              <Link href="/projelerimiz" className="transition-colors hover:text-white">
                Projelerimiz
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-sand-200">{area?.name}</span>
            </nav>

            <h1 className="mt-5 text-[30px] leading-[1.06] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.8] text-sand-200/90 sm:text-[17px]">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* İçerik */}
      <section className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal className="space-y-5">
              {project.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[17px] leading-[1.85] text-ink-600"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            {project.gallery && project.gallery.length > 0 && (
              <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <StaggerItem key={src}>
                    <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-card">
                      <Photo
                        src={src}
                        alt={`${project.title} — proje fotoğrafı`}
                        fill
                        sizes="(min-width: 640px) 420px, 100vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            )}
          </div>

          {/* Yan panel */}
          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="sticky top-28 space-y-4">
                <div className="rounded-3xl border border-sand-200 bg-white p-7 shadow-card">
                  <h2 className="font-display text-[17px] font-bold text-ink-950">
                    Çalışma alanı
                  </h2>
                  <p className="mt-4 flex items-center gap-2 text-[15px] text-ink-900">
                    {AreaIcon && <AreaIcon className="h-4.5 w-4.5 text-clay-600" />}
                    {area?.name}
                  </p>
                  {area && (
                    <p className="mt-3 text-[14px] leading-[1.7] text-ink-500">
                      {area.description}
                    </p>
                  )}
                </div>

                <div className="rounded-3xl bg-ink-950 p-7 text-sand-200">
                  <h2 className="font-display text-[17px] font-bold text-white">
                    Bu projede yer alın
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.75] text-sand-300/90">
                    Çalışmalarımıza gönüllü olarak katılabilir, sorularınız için bize
                    yazabilirsiniz.
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5">
                    <Button href="/gonullu-ol" variant="primary" className="w-full">
                      Gönüllü Ol
                    </Button>
                    <Button href="/iletisim" variant="light" className="w-full">
                      Bize Ulaşın
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Benzer projeler */}
      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100 py-20">
          <div className="container-x">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <Reveal>
                <span className="eyebrow">Aynı alanda</span>
                <h2 className="mt-5 text-[28px] leading-[1.1] tracking-[-0.02em] sm:text-[34px]">
                  Benzer projeler
                </h2>
              </Reveal>
              <Reveal className="shrink-0">
                <Button href="/projelerimiz" variant="outline">
                  Tüm projeler <ArrowIcon className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p.slug} className="h-full">
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
