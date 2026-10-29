import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Users } from "lucide-react";
import PhotoMarquee from "@/components/PhotoMarquee";
import Reveal from "@/components/Reveal";
import { CtaBand, Pillars, Testimonials } from "@/components/Sections";
import { photos, site } from "@/lib/site";

const stats = [
  { value: "14+", label: "Years of teaching experience" },
  { value: "All ages", label: "Children & adult learners" },
  { value: String(site.founded), label: "Serving Jos South since" },
];

const offerings = [
  {
    Icon: BookOpen,
    title: "Reading & literacy",
    body: "Phonics, word-building games and story circles that turn reluctant readers into confident ones.",
  },
  {
    Icon: GraduationCap,
    title: "After-school program",
    body: "Support in English, Science and core primary subjects that reinforces the school curriculum at each child's pace.",
  },
  {
    Icon: HeartHandshake,
    title: "Special needs support",
    body: "Patient, one-on-one help, from fine and gross motor skills to support for learners with dyslexia.",
  },
  {
    Icon: Users,
    title: "Adult literacy",
    body: "Basic reading and writing skills for adults, taught with patience and respect.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper">
        <Image
          src="/IMG-17.jpg"
          alt="Children reading picture books together at GoldAcres"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />

        <div className="container-page pt-40 pb-16 sm:pb-24">
          <p className="eyebrow !text-gold-300">GoldAcres Learning Center · Jos, Plateau State</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-medium tracking-tight">
            Give a child the gift of <em className="text-gold-gradient pr-2">learning.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/85 sm:text-xl">
            Transforming lives one step at a time, with a nurturing space where every learner discovers, develops and thrives.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about" className="btn-gold">
              Discover our story <ArrowRight className="size-4" />
            </Link>
            <Link href="/gallery" className="btn-ghost text-paper">
              See us in action
            </Link>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl text-gold-300">{s.value}</dd>
                <dd className="mt-1 text-sm text-paper/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/Welcome-image.jpg"
                alt="A learner working on an activity book in class"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-8 hidden w-56 overflow-hidden rounded-3xl border-8 border-paper shadow-xl sm:block lg:-right-10">
              <Image src="/IMG-32.jpg" alt="A word-building game with letter tiles" width={400} height={300} className="aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -top-6 -left-4 animate-float rounded-2xl bg-ink px-4 py-3 shadow-xl">
              <Image src="/brand/mark.png" alt="" width={220} height={98} className="h-10 w-auto" />
              <p className="mt-1 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-paper/80">Est. {site.founded}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Welcome to GoldAcres</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Every individual holds hidden treasure waiting to be unearthed.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Our mission is to provide a nurturing environment where learners of all abilities discover, develop, and showcase their
                unique strengths.
              </p>
              <p>
                We foster creativity, critical thinking, and a passion for lifelong learning. Through engaging activities and
                personalised guidance, we empower students to shine in their own unique ways.
              </p>
            </div>
            <Link href="/about" className="btn-dark mt-8">
              More about us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">How we help</p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Learning that feels like play</h2>
            </div>
            <p className="max-w-sm text-ink-soft">Fun, interactive and accessible, so progress in the classroom comes with real enthusiasm.</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100} className="bg-paper p-8">
                <Icon className="size-8 text-sky-500" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pillars />

      {/* Founder teaser */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-cream">
              <Image src="/Abbt.jpeg" alt="Joyce Pam, founder of GoldAcres" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:pl-8">
            <p className="eyebrow">Meet the founder</p>
            <blockquote className="mt-6 font-display text-3xl leading-snug font-medium text-balance sm:text-4xl">
              &ldquo;I believe every individual learns uniquely and has inherent strengths. My mission is to help them grow at their own
              pace.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg text-ink-soft">
              <span className="font-semibold text-ink">Joyce Pam</span> is a certified teacher with over 14 years of experience, holding a
              PGCE and a Masters in Education, and specialising in language learning.
            </p>
            <Link href="/about#founder" className="btn-dark mt-8">
              Read her story <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Photo strip */}
      <section className="overflow-hidden bg-ink py-24 text-paper sm:py-32">
        <div className="container-page flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-gold-300">A bit of us</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Join us in uncovering the gold within every individual
            </h2>
          </Reveal>
          <Link href="/gallery" className="btn-ghost self-start text-paper md:self-auto">
            View the gallery <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-14">
          <PhotoMarquee photos={photos} />
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
