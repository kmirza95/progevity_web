import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Services — Progevity PA",
};

const blocks = [
  {
    tag: "1. START HERE",
    title: "Foundational Longevity Assessment (Initial Consultation)",
    bullets: [
      "Consult with a medical doctor for one hour",
      "Consult with a nutritionist for one hour",
      "Consult with a physical therapist for one hour",
    ],
  },
  {
    tag: "2. DEEP DIVE",
    title: "Data-Driven Diagnostics & Profiling",
    bullets: [
      "Advanced whole-genome sequencing",
      "Gold-standard musculoskeletal testing",
      "Microbiome & nutrient status testing",
      "State-of-the-art cardiometabolic profiling",
    ],
  },
  {
    tag: "3. SYNTHESIS",
    title: "Integrated Care Planning & Expert Review",
    bullets: [
      "Expert Clinical Team Review: Medical doctor, nutritionist, physical therapist, psychologist, sleep physiologist",
      "Actionable, Comprehensive, Personalized: A lifestyle care plan that optimizes your health today, so tomorrow is secured",
    ],
  },
  {
    tag: "4. ONGOING",
    title: "Longevity Management (Foundational Program: Six per Year)",
    bullets: [
      "Every Two Months: 3x1 model (3h direct care + 1h expert clinical case review)",
      "Personalized retesting as-needed for biomarker reassessment & goal tracking",
    ],
  },
  {
    tag: "5. OUTCOMES",
    title: "Peak Performance",
    bullets: [
      "\"If you have a body, you are an athlete\"—Bill Bowerman",
      "Behind every professional athlete is a personal and comprehensive care team",
      "Act like an athlete to achieve elite-level results. That's our promise to you.",
    ],
  },
  {
    tag: "6. OPTIMIZE",
    title: "Enjoy the Journey (As Objectives are Met, Goals Need Updating)",
    bullets: [
      "Happiness = Growth / Fulfillment",
      "This means: More Time with Loved Ones + More Cap-ability with Loved Ones",
    ],
  },
];

const ctaClassName =
  "inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-100">
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Longevity-centric, multidisciplinary care
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-neutral-600">
              Built around high-impact interventions and coordinated expert reviews.
            </p>
            <div className="mt-8">
              <Link href="/booking" className={ctaClassName}>
                Book
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blocks.map((block) => (
              <article
                key={block.title}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                  {block.tag}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900">
                  {block.title}
                </h2>

                <ul className="mt-5 space-y-3 text-lg leading-8 text-neutral-700">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/booking" className={ctaClassName}>
              Enroll Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
