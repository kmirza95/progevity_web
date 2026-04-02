// components/Differentiators.jsx

export default function Differentiators() {
  const items = [
    {
      kicker: "Phased, programmatic care",
      title: "We design a roadmap — not a one-off consult",
      body: "Care is structured in phases: clarify goals and baselines, stabilize what’s urgent, then layer on longevity strategies that fit your life, budget, and time horizon.",
    },
    {
      kicker: "Multidisciplinary & data-driven",
      title: "One team, one story for your health data",
      body: "MDs, CNS (nutrition), PT, psychologist, and sleep physiologist review your case together. Labs, imaging, wearables, and genomics are translated into a single, coherent plan.",
    },
    {
      kicker: "Longevity with accountability",
      title: "Clear priorities, measurable progress",
      body: "We focus on the majors: metabolic health, movement, sleep, and mental resilience. Each phase ends with 1–3 concrete next steps and clear markers to track over time.",
    },
  ];

  return (
    <section
      id="how-were-different"
      className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              How we&apos;re different
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Precision longevity care that still feels human.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            Progevity combines root-cause medicine, longevity science, and practical
            behavior design. The result is a coordinated care program you can
            actually follow—built around your context, constraints, and long-term
            goals.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="group relative flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              {/* Badge / “+” icon row */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-base leading-none text-emerald-700 shadow-[0_0_0_1px_rgba(16,185,129,0.18)]">
                  +
                </span>
                <span>{item.kicker}</span>
              </div>

              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>

              {/* Subtle bottom accent line */}
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-emerald-500/70 via-emerald-400/60 to-transparent opacity-80 transition-all group-hover:w-20 group-hover:from-emerald-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
