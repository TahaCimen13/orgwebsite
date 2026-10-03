import Link from "next/link";
import { ProjeFormu } from "../ProjeFormu";

export default function YeniProje() {
  return (
    <div>
      <Link href="/admin/projeler" className="text-[13.5px] text-ink-500 hover:text-ink-900">
        ← Projeler
      </Link>
      <h1 className="mt-3 font-display text-[26px] font-bold tracking-[-0.02em] text-ink-950">
        Yeni proje
      </h1>

      <div className="mt-8">
        <ProjeFormu />
      </div>
    </div>
  );
}
