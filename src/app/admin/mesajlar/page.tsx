import { mesajlariGetir } from "@/lib/mesajlar";
import { mesajOkunduIsaretle, mesajSil } from "../actions";
import { formatDate } from "@/lib/format";

const tipEtiketi: Record<string, string> = {
  contact: "İletişim",
  volunteer: "Gönüllü başvurusu",
};

export default async function AdminMesajlar() {
  const mesajlar = await mesajlariGetir();

  return (
    <div>
      <h1 className="font-display text-[26px] font-bold tracking-[-0.02em] text-ink-950">
        Mesajlar
      </h1>
      <p className="mt-2 text-[14px] text-ink-500">
        Siteden gelen iletişim ve gönüllü başvuruları. Kişisel veri içerir — dışarıyla paylaşmayın.
      </p>

      {mesajlar.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-sand-300 bg-white p-16 text-center">
          <p className="font-display text-[20px] font-bold text-ink-950">Henüz mesaj yok</p>
          <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink-500">
            Formlardan gelen başvurular burada görünecek.
          </p>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {mesajlar.map((m) => (
            <li
              key={m.id}
              className={`rounded-3xl border bg-white p-6 shadow-card ${
                m.is_read ? "border-sand-200" : "border-clay-300"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {!m.is_read && (
                      <span className="inline-block h-2 w-2 rounded-full bg-clay-600" aria-label="Okunmadı" />
                    )}
                    <span className="font-display text-[16px] font-bold text-ink-950">{m.name}</span>
                    <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-[11.5px] font-semibold text-ink-600">
                      {tipEtiketi[m.form_type] ?? m.form_type}
                    </span>
                    {m.subject && (
                      <span className="rounded-full bg-clay-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-clay-700">
                        {m.subject}
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-ink-500">
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="hover:text-clay-700">
                        {m.email}
                      </a>
                    )}
                    {m.phone && (
                      <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`} className="hover:text-clay-700">
                        {m.phone}
                      </a>
                    )}
                    <time dateTime={m.created_at}>{formatDate(m.created_at)}</time>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <form action={mesajOkunduIsaretle}>
                    <input type="hidden" name="id" value={m.id} />
                    <input type="hidden" name="durum" value={m.is_read ? "okunmadi" : "okundu"} />
                    <button
                      type="submit"
                      className="rounded-full border border-ink-200 px-4 py-2 text-[13px] font-semibold text-ink-800 transition-colors hover:bg-sand-100"
                    >
                      {m.is_read ? "Okunmadı yap" : "Okundu"}
                    </button>
                  </form>
                  <form action={mesajSil}>
                    <input type="hidden" name="id" value={m.id} />
                    <button
                      type="submit"
                      className="rounded-full px-3 py-2 text-[13px] font-semibold text-clay-700 transition-colors hover:bg-clay-50"
                    >
                      Sil
                    </button>
                  </form>
                </div>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-[15px] leading-[1.75] text-ink-700">
                {m.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
