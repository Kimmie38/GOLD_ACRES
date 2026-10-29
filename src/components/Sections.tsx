import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Quote, Sprout, Target } from "lucide-react";
import Reveal from "./Reveal";
import { pillars, site, testimonials } from "@/lib/site";

const pillarIcons = { vision: Eye, mission: Target, values: Sprout };

/** Dark photo banner used at the top of inner pages. */
export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-36 pb-20 text-paper sm:pt-44 sm:pb-28">
      <Image src={image} alt="" fill priority quality={90} sizes="100vw" className="-z-10 object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="container-page">
        <p className="eyebrow !text-gold-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">{intro}</p>
      </div>
    </section>
  );
}

export function Pillars() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What guides us</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            Every learner has gold within. We help them find it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[p.key];
            return (
              <Reveal
                key={p.key}
                delay={i * 120}
                className="group rounded-3xl border border-line bg-paper p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(19_33_44/0.25)]"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-ink text-gold-400 transition group-hover:bg-sky-500 group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-paper sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Our motto</p>
            <p className="mt-3 font-display text-3xl italic sm:text-4xl">
              {site.motto.slice(0, -1).join(", ")} <span className="text-gold-gradient">&amp; {site.motto.at(-1)}</span>
            </p>
          </div>
          <Image src="/brand/mark.png" alt="" width={220} height={98} className="hidden h-16 w-auto md:block" />
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Kind words from families</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            A bit of what GoldAcres has given
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 120}
              className="relative flex flex-col rounded-3xl border border-line bg-white p-8 sm:p-10"
            >
              <Quote className="size-10 fill-gold-400 text-gold-400" />
              <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="grid size-12 place-items-center rounded-full bg-sky-100 font-display text-lg text-sky-700">
                  {t.name.replace(/^(Mrs|Mr|Parent of)\s+/, "").charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-ink-soft">{t.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-paper sm:px-16 sm:py-20">
          <Image src="/IMG-40.jpg" alt="" fill sizes="(min-width: 1280px) 1200px, 100vw" className="-z-10 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Ready to uncover your child&rsquo;s gold?
            </h2>
            <p className="mt-5 text-lg text-paper/80">
              Reach out to learn about our after-school classes, reading support and one-on-one tutoring for children and adults.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Get in touch <ArrowRight className="size-4" />
              </Link>
              <a href={site.phoneHref} className="btn-ghost text-paper">
                Call {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
