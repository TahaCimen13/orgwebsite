import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { RequestFilter } from "@/components/RequestFilter";
import { requests } from "@/data/requests";
import { categoryBySlug } from "@/data/categories";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Yardım Talepleri",
  description:
    "Sosyal inceleme ekibimizce doğrulanmış açık yardım taleplerini inceleyin ve destek olmak istediğiniz hikâyeyi seçin.",
};

export default async function RequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const initial = kategori && categoryBySlug(kategori) ? kategori : "tumu";

  return (
    <>
      <PageHero
        eyebrow="Yardım Talepleri"
        title="Desteğinizi bekleyen açık talepler"
        description="Her talep yerinde incelenir ve belgelenir. Doğrudan destek olabilir, dilerseniz süreci takip edebilirsiniz."
      >
        <Button href="/yardim-talebi-olustur" variant="primary" size="lg">
          Yardım Talebi Oluştur
        </Button>
      </PageHero>

      <section className="container-x py-20">
        <RequestFilter requests={requests} initialCategory={initial} />
      </section>
    </>
  );
}
