import Link from "next/link";
import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <LogoMark className="h-16 w-16" />
      <p className="mt-10 font-display text-[72px] font-extrabold leading-none text-clay-600">404</p>
      <h1 className="mt-6 text-[28px] sm:text-[34px]">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-5 max-w-md text-[16px] leading-[1.8] text-ink-600">
        Bağlantı taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg">
          Ana sayfaya dönün
        </Button>
        <Button href="/projelerimiz" variant="outline" size="lg">
          Projelerimiz
        </Button>
      </div>
      <Link
        href="/iletisim"
        className="mt-8 text-[13.5px] text-ink-500 underline decoration-sand-300 underline-offset-4 hover:text-ink-900"
      >
        Sorun devam ediyorsa bize yazın
      </Link>
    </section>
  );
}
