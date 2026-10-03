import { redirect } from "next/navigation";
import { GirisFormu } from "./GirisFormu";
import { oturumAcikMi } from "@/lib/admin-auth";

export default async function GirisPage({
  searchParams,
}: {
  searchParams: Promise<{ devam?: string }>;
}) {
  const { devam } = await searchParams;

  // Zaten girişliyse formu gösterme
  if (await oturumAcikMi()) redirect("/admin");

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand-100 px-5">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <span className="font-display text-[20px] font-extrabold text-ink-950">
            Derman <span className="font-medium text-clay-600">Yönetim</span>
          </span>
          <p className="mt-2 text-[14px] text-ink-500">Devam etmek için şifreyi girin</p>
        </div>

        <GirisFormu devam={devam ?? "/admin"} />
      </div>
    </div>
  );
}
