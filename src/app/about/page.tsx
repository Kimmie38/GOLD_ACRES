import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, Check, Compass, Target } from "lucide-react";
import { CtaBand, PageHero, Pillars, Testimonials } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const approach = [
  {
    title: "Our philosophy",
    intro: "We recognise each person learns differently and at their own pace. Our team:",
    items: [
      "Supports diverse learning styles and needs",
      "Reinforces school curricula through personalised instruction",
      "Provides therapy for children with special needs",
      "Fosters confidence through strength-based development",
      "Encourages community engagement and social growth",
    ],
  },
  {
    title: "Empowering potential",
    intro: "At GoldAcres we:",
    items: [
      "Identify and cultivate individual talents",
      "Build resilience and self-esteem",
      "Offer adaptive skill training",
      "Create inclusive opportunities for socialisation",
      "Collaborate with families and educators for holistic support",
    ],
  },
];

const barriers = [
  {
    Icon: Target,
    title: "Our goal",
    body: "A supportive, inclusive environment where learners develop their skills, confidence and talents at their own pace.",
  },
  {
    Icon: Award,
    title: "Experience",
    body: "14+ years as a certified teacher, tutoring students from primary to higher levels in English, Science and other subjects.",
  },
  {
    Icon: Compass,
    title: "Approach",
    body: "Differentiated instruction, personalised learning and a growth mindset, so every learner gets the support they need to thrive.",
  },
  {
    Icon: BookOpen,
    title: "Impact & aim",
    body: "Building a love of reading for learners of all ages through engaging programs, accessible books and community-driven initiatives.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet GoldAcres Learning Center and our founder, Joyce Pam: our vision, mission and values.",
};

const credentials = ["BA, History & International Studies", "PGCE", "Masters in Education", "Specialist in language learning"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GoldAcres"
        title="A learning home where every learner can shine."
        intro="GoldAcres Learning Center was founded in Jos South on a simple belief: everyone learns differently, and everyone has gold within them worth discovering."
        image="/IMG-3.jpg"
      />

      <section id="founder" className="scroll-mt-24 py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream">
                <Image src="/Her-image.jpeg" alt="Joyce Pam, founder of GoldAcres" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <li key={c} className="rounded-full border border-line bg-white px-4 py-2 text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">Our founder</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Joyce Pam</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p className="font-display text-2xl leading-snug text-ink">
                &ldquo;I&rsquo;m a dedicated and passionate tutor with a heartfelt commitment to empowering children and adults to reach
                their full potential.&rdquo;
              </p>
              <p>
                I believe every individual learns uniquely and has inherent strengths. My mission is to foster a supportive environment
                where learners can develop their skills, confidence, and talents at their own pace.
              </p>
              <p>
                As a certified teacher with 14+ years of experience, I&rsquo;ve tutored students from primary to higher levels in English,
                Science, and other elementary school subjects. My passion lies in adapting learning strategies to meet individual needs,
                fostering confidence and academic success.
              </p>
              <p>
                Outside tutoring, I enjoy reading, running, and volunteering in community education initiatives. I earned a BA in History
                and International Studies, a PGCE, and a Masters in Education, and I specialise in language learning.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/IMG-14.jpg" alt="Reading with two young learners" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/About-image.jpg" alt="Joyce Pam teaching outdoors" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow !text-gold-300">The birth of GoldAcres</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              It began with one learner, and a long-held vision.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-paper/80">
              <p>
                In 2023, a chance encounter with a 22-year-old young woman with special needs re-ignited a long vision. I saw an
                opportunity to make a difference by providing personalised attention and patient instruction.
              </p>
              <p>
                From the fundamentals of fine motor skills (cutting paper, using scissors, tying shoelaces and buttoning shirts) to
                encouraging gross motor skills, our journey began. Soon I was also tutoring a boy suspected to have dyslexia, and adults
                seeking basic reading and writing skills started reaching out.
              </p>
              <p>
                As demand grew, a pressing need emerged: a dedicated space where learners could gather and continue their education after
                school, rather than dispersing to individual homes. GoldAcres opened its doors in {site.founded}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image src="/IMG-1.jpg" alt="An outdoor reading session" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/Middle-image.jpg" alt="Hands joined with star stickers" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/IMG-30.jpg" alt="Sentence-building with wooden word blocks" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              A flexible, supportive community. And yes, fun is part of the plan.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              We provide basic literacy skills and an after-school program to empower local children. Our personalised approach fosters
              confidence and creativity in each learner, and we believe in learning through play.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {approach.map((block, i) => (
              <Reveal key={block.title} delay={i * 120} className="rounded-3xl border border-line bg-white p-8 sm:p-10">
                <h3 className="font-display text-2xl font-medium">{block.title}</h3>
                <p className="mt-2 text-ink-soft">{block.intro}</p>
                <ul className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Breaking the barriers */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Breaking the barriers</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-balance">Why our work matters</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Many children in our area face significant reading challenges and perform below grade level, highlighting the need for
              better educational support.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {barriers.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100} className="rounded-3xl bg-paper p-8">
                <Icon className="size-8 text-sky-500" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Pillars />
      <Testimonials />
      <CtaBand />
    </>
  );
}
