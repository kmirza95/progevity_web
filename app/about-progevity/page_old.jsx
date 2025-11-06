import Link from "next/link";

const SimpleCard = ({ title, children }) => (
  <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 shadow-sm">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{children}</div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div className="mt-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-8 shadow-sm">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Shifting healthcare toward meaningful, measurable outcomes
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          We focus on the majors, integrate a multidisciplinary team, and make data actionable.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/booking" className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition">
            Book your Initial Consultation
          </Link>
          <Link href="/our-services" className="rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            See Our Services
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <SimpleCard title="Our Mission">
          To extend healthspan by delivering high-impact care across the four pillars of
          longevity—nutrition, movement, sleep, and mental health—while integrating advanced
          diagnostics and expert case reviews.
        </SimpleCard>
        <SimpleCard title="Our Ethos">
          <ul className="list-disc pl-5 space-y-1">
            <li>Prioritize the majors over the minors.</li>
            <li>Use data to personalize plans and verify progress.</li>
            <li>Coordinate a true team: MDs, CNS, PT, psychologist, and sleep physiologist.</li>
            <li>Communicate clearly—everything lives in the Client Portal.</li>
          </ul>
        </SimpleCard>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {["Foundational Assessment","Data-Driven Diagnostics","Expert Review","Personalized Plan Delivery"].map((t,i)=>(
          <div key={i} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-5 shadow-sm">
            <div className="text-[10px] tracking-widest text-zinc-500/70">STEP {i+1}</div>
            <h4 className="mt-1 font-semibold">{t}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
