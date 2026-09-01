import { Photo } from "@/components/Photo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { postBySlug, posts } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";


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
    alternates: { canonical: `/duyurular/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
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

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        image: `${site.url}${post.image}`,
        articleSection: post.tag,
        publisher: { "@type": "NGO", name: site.legalName, url: site.url },
        mainEntityOfPage: `${site.url}/duyurular/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
          { "@type": "ListItem", position: 2, name: "Duyurular", item: `${site.url}/duyurular` },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="border-b border-sand-200 bg-sand-100">
        <div className="container-x flex items-center gap-2.5 py-4 text-[13px] text-ink-400">
          <Link href="/" className="transition-colors hover:text-ink-900">
            Ana Sayfa
          </Link>
          <span className="text-sand-300">/</span>
          <Link href="/duyurular" className="transition-colors hover:text-ink-900">
            Duyurular
          </Link>
          <span className="text-sand-300">/</span>
          <span className="truncate text-ink-700">{post.title}</span>
        </div>
      </div>

      <article className="container-x py-14">
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-10 aspect-16/9 overflow-hidden rounded-3xl shadow-lift">
            <Photo
              src={post.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[13px] text-ink-400">
            <span className="rounded-full bg-clay-50 px-3 py-1.5 font-semibold text-clay-700">
              {post.tag}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>· {post.readingTime} okuma</span>
          </div>

          <h1 className="mt-6 text-[36px] leading-[1.15] sm:text-[46px]">{post.title}</h1>
          <p className="mt-6 text-[18px] leading-[1.8] text-ink-500">{post.excerpt}</p>

          <div className="my-10 h-px bg-sand-200" />

          <div className="space-y-6 text-[17px] leading-[1.9] text-ink-700">
            {post.content.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-sand-200 bg-sand-100 p-10 text-center">
            <h2 className="font-display text-[26px] font-bold leading-snug text-ink-950">
              Siz de destek olmak ister misiniz?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.8] text-ink-600">
              Bağış yaparak ya da gönüllü olarak bu çalışmaların parçası olabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/bagis" variant="primary">
                Bağış Yap
              </Button>
              <Button href="/gonullu-ol" variant="outline">
                Gönüllü Ol
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-sand-200 bg-sand-100 py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-[26px] sm:text-[32px]">Diğer duyurular</h2>
            <Button href="/duyurular" variant="ghost" size="sm">
              Tümü
            </Button>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {others.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
