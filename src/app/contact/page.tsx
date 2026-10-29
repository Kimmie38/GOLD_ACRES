import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/Sections";
import SocialLinks from "@/components/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GoldAcres Learning Center in Jos South, Plateau State.",
};

const channels = [
  { Icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { Icon: MapPin, label: "Visit us", value: site.address.join(", "), href: site.mapsUrl, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your learner."
        intro="Whether you're a parent, guardian or adult learner, we'd love to hear from you. Ask about classes, schedules or how we can help."
        image="/IMG-45.jpg"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {channels.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-start gap-5 rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_20px_40px_-24px_rgb(19_33_44/0.3)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-gold-400 transition group-hover:bg-sky-500 group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-ink-soft">{label}</span>
                  <span className="mt-1 block font-semibold break-all">{value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-3xl bg-ink p-6 text-paper">
              <p className="text-sm text-paper/70">Follow our story</p>
              <SocialLinks className="mt-4" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-cream p-6 sm:p-10 lg:col-span-7">
            <h2 className="font-display text-3xl font-medium">Send us a message</h2>
            <p className="mt-2 text-ink-soft">Fill this in and it will open in your email app, ready to send.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
