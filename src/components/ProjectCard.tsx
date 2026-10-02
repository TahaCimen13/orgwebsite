import { Photo } from "./Photo";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { areaBySlug } from "@/data/areas";
import { ArrowIcon } from "./Icons";

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
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink-800 backdrop-blur">
          {area?.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[18px] font-bold leading-snug text-ink-950">
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
