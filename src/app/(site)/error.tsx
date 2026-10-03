"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Gerçek yayında buraya hata izleme servisi (ör. Sentry) bağlanır.
    console.error(error);
  }, [error]);

  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Bir sorun oluştu</span>
      <h1 className="mt-6 text-[30px] leading-tight sm:text-[36px]">
        Sayfa görüntülenirken bir hata oluştu
      </h1>
      <p className="mt-5 max-w-md text-[16px] leading-[1.8] text-ink-500">
        Geçici bir sorun olabilir. Tekrar denemeyi ya da ana sayfaya dönmeyi deneyebilirsiniz.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button onClick={reset} size="lg">
          Tekrar dene
        </Button>
        <Button href="/" variant="outline" size="lg">
          Ana sayfaya dön
        </Button>
      </div>
      {error.digest && (
        <p className="mt-8 text-[12.5px] text-ink-400">Hata kodu: {error.digest}</p>
      )}
    </section>
  );
}
