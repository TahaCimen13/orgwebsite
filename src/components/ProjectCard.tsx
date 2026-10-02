import { Photo } from "./Photo";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { statusLabels } from "@/data/projects";
import { areaBySlug } from "@/data/areas";
import { formatMonthYear } from "@/lib/format";
import { ArrowIcon, PinIcon } from "./Icons";

const statusStyles: Record<Project["status"], string> = {
  "devam-ediyor": "bg-olive-600 text-white",
  tamamlandi: "bg-ink-900 text-white",
  planlaniyor: "bg-clay-600 text-white",
};

export function ProjectCard({ project }: { project: Project }) {
  const area = areaBySlug(project.area);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-clay-200 hover:shadow-lift">
      <div className="relative h-48 overflow-hidden">
        <Photo
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink-800 backdrop-blur">
            {area?.name}
          </span>
          <span
            className={`rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${statusStyles[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
        </div>
        {project.location && (
          <span className="absolute bottom-3.5 left-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/95">
            <PinIcon className="h-3.5 w-3.5" /> {project.location}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <time dateTime={project.date} className="text-[12.5px] text-ink-400">
          {formatMonthYear(project.date)}
        </time>

        <h3 className="mt-2 font-display text-[18px] font-bold leading-snug text-ink-950">
          <Link href={`/projelerimiz/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[14px] leading-[1.7] text-ink-500">
          {project.summary}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-semibold text-ink-900 transition-colors group-hover:text-clay-600">
          Projeyi gör
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
