import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { areas } from "@/data/areas";

export const metadata: Metadata = {
  title: "Gönüllü Ol",
  description:
    "Derman Derneği çalışmalarına gönüllü olarak katılın. Deneyim gerekmiyor; başvuru formunu doldurmanız yeterli.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Gönüllülük"
        title="Katkı sunmak için zamanınız yeter"
        description="Gönüllülüğü herkesin kendi hayatına sığdırabileceği bir şey hâline getirmeye çalışıyoruz. Başvurmak için formu doldurmanız yeterli."
        image="/images/gonulluler.jpg"
      />

      <section className="container-x py-16 lg:py-20">
        <Reveal className="mx-auto w-full max-w-3xl">
          <ContactForm
            formType="volunteer"
            title="Gönüllü başvuru formu"
            description="Başvurunuzu aldıktan sonra size dönüyor, nasıl katkı sunmak istediğinizi birlikte belirliyoruz."
            messageLabel="Kendinizden kısaca bahsedin"
            submitLabel="Başvuruyu Gönder"
            subjects={["Herhangi bir alan", ...areas.map((a) => a.name)]}
          />
        </Reveal>
      </section>
    </>
  );
}
