// components/Testimonials.jsx

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      badge: "Verified care",
      quote:
        "Khalil is truly a master of his craft. With his help, I was able to lose more than 40 lbs over a year’s duration, which translated very positively into my fitness levels, mental wellbeing, and laboratory health markers. If you are looking for a well-rounded service that emphasizes science-backed interventions and personalized nutrition based on your genetics and goals, Progevity is the way to go.",
      name: "Yousef Annous, MD",
      role: "Emergency Medicine",
    },
    {
      id: 2,
      badge: "Verified care",
      quote:
        "I started getting nutrition advice from Khalil about four years ago. Since implementing his recommendations, I’ve noticed a significant change in how my body feels, particularly as an athlete. His recommendations on diet, natural supplements, and recovery have been instrumental in my ability to continue to compete at peak performance at the highest level of women’s lacrosse. I highly recommend Khalil’s expertise to anybody looking for a more balanced lifestyle, more effective and efficient nutrition, and the proper tools for their body so that it can perform at its greatest potential.",
      name: "Daniela Eppler",
      role: "International Lacrosse Athlete, Mexican National Team",
    },
    {
      id: 3,
      badge: "Verified care",
      quote:
        "Since working with Khalil, although I felt on the healthier side before, I have noticed several improvements in my quality of life including but not limited to better sleep, improved body composition, less digestive/gut issues, consistent energy and more.",
      name: "Rayyan Damaj",
      role: "Entrepreneur",
    },
  ];

  return (
    <section
      id="patient-stories"
      aria-labelledby="patient-stories-title"
      className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
              Patient stories
            </p>
            <h2
              id="patient-stories-title"
              className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900"
            >
              What patients are saying.
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Every patient story is unique, but common themes emerge: clearer
            plans, measurable progress, and an expert care team that translates dense
            science into actionable next-steps to actually move the health needle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="relative flex flex-col rounded-2xl border border-emerald-100 bg-white/80 px-5 py-6 shadow-sm shadow-emerald-50/60 ring-1 ring-slate-100/60 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 tracking-[0.18em] uppercase">
                <span>{t.badge}</span>
                <div
                  className="flex items-center gap-0.5 text-emerald-500"
                  aria-hidden="true"
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <p className="font-semibold text-slate-800">{t.name}</p>
                <p>{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
