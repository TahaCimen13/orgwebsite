import { Photo } from "./Photo";
import Link from "next/link";
import type { Post } from "@/data/posts";
import { formatDate } from "@/lib/format";
import { ArrowIcon, ClockIcon } from "./Icons";

const tagStyles: Record<Post["tag"], string> = {
  Duyuru: "bg-clay-50 text-clay-700",
  Etkinlik: "bg-olive-50 text-olive-700",
  Farkındalık: "bg-sand-200 text-ink-700",
  Kampanya: "bg-clay-600 text-white",
};

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative h-44 overflow-hidden">
        <Photo
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${tagStyles[post.tag]}`}
        >
          {post.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[12.5px] text-ink-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-3.5 w-3.5" /> {post.readingTime}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[18px] font-bold leading-snug text-ink-950">
          <Link href={`/duyurular/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[14px] leading-[1.7] text-ink-500">{post.excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-semibold text-ink-900 transition-colors group-hover:text-clay-600">
          Devamını oku
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
