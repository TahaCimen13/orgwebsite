import { Photo } from "@/components/Photo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requestBySlug, requests } from "@/data/requests";
import { categoryBySlug } from "@/data/categories";
import { formatDate, formatTRY, percent } from "@/lib/format";
import { ProgressBar, RequestCard } from "@/components/RequestCard";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";
import { CheckIcon, ClockIcon, HeartIcon, PinIcon, ShieldIcon, UsersIcon } from "@/components/Icons";

export function generateStaticParams() {
  return requests.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const request = requestBySlug(slug);
  if (!request) return { title: "Talep bulunamadı" };
  return {
    title: request.title,
    description: request.summary,
    alternates: { canonical: `/yardim-talepleri/${request.slug}` },
    openGraph: {
      title: request.title,
      description: request.summary,
      type: "article",
      images: [{ url: request.image, width: 1200, height: 630, alt: request.title }],
    },
  };
}

export default async function RequestDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const request = requestBySlug(slug);
  if (!request) notFound();

  const category = categoryBySlug(request.category);
  const pct = percent(request.collected, request.target);
  const remaining = Math.max(0, request.target - request.collected);
  const related = requests
    .filter((r) => r.slug !== request.slug && r.category === request.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: request.title,
        description: request.summary,
        datePublished: request.createdAt,
        image: `${site.url}${request.image}`,
        publisher: { "@type": "NGO", name: site.legalName, url: site.url },
        mainEntityOfPage: `${site.url}/yardim-talepleri/${request.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Yardım Talepleri",
            item: `${site.url}/yardim-talepleri`,
          },
          { "@type": "ListItem", position: 3, name: request.title },
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
        <div className="container-x flex items-center gap-2.5 py-4 text-[12.5px] text-ink-400">
          <Link href="/" className="transition-colors hover:text-ink-900">
            Ana Sayfa
          </Link>
          <span className="text-sand-300">/</span>
          <Link href="/yardim-talepleri" className="transition-colors hover:text-ink-900">
            Yardım Talepleri
          </Link>
          <span className="text-sand-300">/</span>
          <span className="truncate text-ink-700">{request.title}</span>
        </div>
      </div>

      <article className="container-x grid gap-16 py-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl shadow-lift">
            <Photo
              src={request.image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-[12px] font-semibold text-ink-800 backdrop-blur">
                {category?.name}
              </span>
              {request.urgency === "acil" && (
                <span className="rounded-full bg-clay-600 px-3.5 py-1.5 text-[12px] font-semibold text-white">
                  Acil
                </span>
              )}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-400">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="h-4 w-4" /> {request.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UsersIcon className="h-4 w-4" /> {request.supporters} destekçi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              <time dateTime={request.createdAt}>{formatDate(request.createdAt)}</time>
            </span>
          </div>

          <h1 className="mt-4 text-[32px] leading-[1.12] sm:text-[42px]">{request.title}</h1>

          <div className="mt-8 space-y-5 text-[17px] leading-[1.9] text-ink-700">
            {request.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-sand-200 bg-white p-7 shadow-card sm:p-8">
            <span className="eyebrow">İhtiyaç listesi</span>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {request.needs.map((need) => (
                <li key={need} className="flex items-start gap-3 text-[14.5px] text-ink-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clay-600 text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {need}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex gap-4 rounded-3xl bg-sand-100 p-6 text-[14px] leading-[1.8] text-ink-600">
            <ShieldIcon className="h-5 w-5 shrink-0 text-clay-600" />
            <p>
              Bu talep ekibimiz tarafından yerinde incelenmiş ve belgelenmiştir. İhtiyaç sahibinin
              mahremiyeti gereği kimlik bilgileri paylaşılmaz.
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="rounded-3xl border border-sand-200 bg-white p-7 shadow-lift sm:p-8">
              <span className="eyebrow">Durum</span>

              <p className="mt-5 font-display text-[34px] font-extrabold leading-none text-ink-950">
                {formatTRY(request.collected)}
              </p>
              <p className="mt-2 text-[14px] text-ink-400">
                Hedef {formatTRY(request.target)} · %{pct} tamamlandı
              </p>

              <div className="mt-6">
                <ProgressBar value={pct} />
              </div>

              <dl className="mt-7 divide-y divide-sand-200 rounded-2xl bg-sand-50 px-5 text-[14px]">
                {[
                  { t: "Kalan tutar", v: formatTRY(remaining) },
                  { t: "Destekçi", v: `${request.supporters} kişi` },
                  { t: "Şehir", v: request.city },
                ].map((row) => (
                  <div key={row.t} className="flex items-baseline justify-between py-3.5">
                    <dt className="text-ink-400">{row.t}</dt>
                    <dd className="text-ink-900">{row.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-3">
                <Button href="/bagis" variant="primary" size="lg" className="w-full">
                  <HeartIcon className="h-5 w-5" /> Bu talebe destek olun
                </Button>
                <Button href="/iletisim" variant="outline" size="lg" className="w-full">
                  Ekibimizle iletişime geçin
                </Button>
              </div>

              <p className="mt-6 text-[12.5px] leading-[1.8] text-ink-400">
                Ayni destek de sunabilirsiniz. İhtiyaç listesindeki ürünleri doğrudan ulaştırmak için
                bize yazın.
              </p>
            </div>
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100 py-20 lg:py-24">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-[26px] sm:text-[32px]">Benzer talepler</h2>
              <Button href="/yardim-talepleri" variant="ghost" size="sm">
                Tümü
              </Button>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RequestCard key={r.slug} request={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
