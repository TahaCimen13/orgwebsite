import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjeFormu } from "../ProjeFormu";
import { projeGetirId } from "@/lib/projeler";

export default async function ProjeDuzenle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proje = await projeGetirId(id);
  if (!proje) notFound();

  return (
    <div>
      <Link href="/admin/projeler" className="text-[13.5px] text-ink-500 hover:text-ink-900">
        ← Projeler
      </Link>
      <h1 className="mt-3 font-display text-[26px] font-bold tracking-[-0.02em] text-ink-950">
        {proje.title}
      </h1>

      <div className="mt-8">
        <ProjeFormu proje={proje} />
      </div>
    </div>
  );
}
