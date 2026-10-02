import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import { posts, postBySlug } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { ArrowIcon, ClockIcon } from "@/components/Icons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "Duyuru bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative overflow-hidden border-b border-sand-200 bg-sand-100">
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-clay-200/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="container-x relative py-14 sm:py-18">
            <Reveal className="mx-auto max-w-3xl" y={18}>
              <nav
                aria-label="Konum"
                className="flex flex-wrap items-center gap-2 text-[13px] text-ink-400"
              >
                <Link href="/duyurular" className="transition-colors hover:text-clay-700">
                  Duyurular
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-ink-600">{post.tag}</span>
              </nav>

              <h1 className="mt-6 text-[34px] leading-[1.08] tracking-[-0.03em] sm:text-[46px]">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-[13.5px] text-ink-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="h-4 w-4" /> {post.readingTime} okuma
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="container-x py-14">
          <Reveal className="mx-auto max-w-3xl">
            <div className="relative aspect-16/9 overflow-hidden rounded-3xl shadow-lift">
              <Photo
                src={post.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-12 space-y-5">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[17.5px] leading-[1.9] text-ink-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-ink-950 p-8 text-sand-200 sm:p-10">
              <h2 className="font-display text-[20px] font-bold text-white">
                Bu çalışmalarda yer almak ister misiniz?
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.75] text-sand-300/90">
                Gönüllü başvurusu yapmanız yeterli. Deneyim gerekmiyor; gerekli her şeyi birlikte
                öğreniyoruz.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/gonullu-ol" variant="primary">
                  Gönüllü Ol <ArrowIcon className="h-4 w-4" />
                </Button>
                <Button href="/iletisim" variant="light">
                  Bize Ulaşın
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100 py-20">
          <div className="container-x">
            <Reveal>
              <span className="eyebrow">Devamı</span>
              <h2 className="mt-5 text-[28px] leading-[1.1] tracking-[-0.02em] sm:text-[34px]">
                Diğer duyurular
              </h2>
            </Reveal>

            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <StaggerItem key={p.slug} className="h-full">
                  <PostCard post={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
