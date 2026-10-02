import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { PageHero } from "@/components/Section";
import { PostCard } from "@/components/PostCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { postsByDate } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { ArrowIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Duyurular",
  description: "Dernek duyuruları, etkinlik çağrıları ve farkındalık yazıları.",
};

export default function PostsPage() {
  const [featured, ...rest] = postsByDate();

  return (
    <>
      <PageHero
        compact
        eyebrow="Duyurular"
        title="Son gelişmeler ve çağrılar"
        description="Yeni projeler, etkinlik çağrıları ve üzerine düşündüğümüz konular burada."
      />

      <section className="container-x py-16">
        {featured && (
          <Reveal>
            <article className="group relative grid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-500 hover:border-clay-200 hover:shadow-lift lg:grid-cols-2">
              <div className="relative h-60 overflow-hidden lg:h-full lg:min-h-80">
                <Photo
                  src={featured.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-clay-600 px-3.5 py-1.5 text-[12px] font-semibold text-white">
                  Öne çıkan
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-[12.5px] text-ink-400">
                  <span className="font-semibold text-clay-700">{featured.tag}</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span className="inline-flex items-center gap-1.5">
                    <ClockIcon className="h-3.5 w-3.5" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 text-[26px] leading-[1.15] tracking-[-0.02em] sm:text-[32px]">
                  <Link href={`/duyurular/${featured.slug}`} className="after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.8] text-ink-500">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-clay-700">
                  Devamını oku
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          </Reveal>
        )}

        {rest.length > 0 && (
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <PostCard post={p} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>
    </>
  );
}
