import Link from "next/link";
import { MailIcon } from "./Icons";

/** Mobilde ekranın altına sabitlenen hızlı eylem çubuğu. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-200 bg-white/95 px-4 py-3 backdrop-blur-lg lg:hidden">
      <div className="flex items-center gap-3">
        <Link
          href="/gonullu-ol"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-clay-600 text-[15px] font-semibold text-white shadow-glow"
        >
          Gönüllü Ol
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-800"
          aria-label="Bize ulaşın"
        >
          <MailIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
