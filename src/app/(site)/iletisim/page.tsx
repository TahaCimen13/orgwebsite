import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.legalName} ile iletişime geçin. Gönüllülük, projeler ve destek talepleri için bize yazabilirsiniz.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="İletişim"
        title="Bize ulaşın"
        description="Gönüllülük, projelerimiz veya bir destek talebi hakkında yazabilirsiniz. Mesajlarınızı birkaç gün içinde yanıtlıyoruz."
      />

      <section className="container-x py-16 lg:py-20">
        <Reveal className="mx-auto w-full max-w-3xl">
          <ContactForm
            formType="contact"
            title="Mesaj gönderin"
            description="Formu doldurduğunuzda talebiniz doğrudan ekibimize ulaşır."
            subjects={[
              "Genel bilgi",
              "Gönüllülük",
              "Destek talebi",
              "Projelerimiz",
              "Kurumsal iş birliği",
              "Basın",
            ]}
          />
        </Reveal>
      </section>
    </>
  );
}
