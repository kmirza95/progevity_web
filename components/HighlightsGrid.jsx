export default function HighlightsGrid() {
  const items = [
    {
      title: "Healthspan‑Driven",
      text:
        "Striving to ensure you maximize your able‑minded and able‑bodied years through multimodal approaches.",
    },
    {
      title: "Longevity‑Centric",
      text:
        "Working backwards from your target age to help guide you decade by decade in your lifelong health journey.",
    },
    {
      title: "Lifespan‑Catalyst",
      text:
        "Gathering the tools needed to help you go beyond the average number of years someone could live.",
    },
    {
      title: "Multidisciplinary",
      text:
        "You get a diverse team of health care specialists focussed only on your health care plan.",
    },
    {
      title: "Foundational Focus",
      text:
        "We focus on the majors, not the minors, so you maximize your chances of living healthier for longer.",
    },
    {
      title: "Elite Athlete Care",
      text:
        "You get access to what the best of the best get, but at a fraction of the cost.",
    },
  ];

  return (
    <section className="band">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">How we’re different</h2>
        <div className="mt-6 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <article key={idx} className="card p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="text-[#005C07] text-xl">＋</span>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-black/70 dark:text-white/70">{it.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
