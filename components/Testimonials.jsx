export default function Testimonials(){
  const quotes = [
    { q: "Khalil is truly a master of his craft… If you're looking for a well‑rounded service that emphasizes science‑backed interventions and personalized nutrition, Progevity is the way to go.", a:"Yousef Annous, MD" },
    { q: "Since implementing his recommendations I noticed a significant change in my body… his guidance has been instrumental in my ability to perform at a peak level.", a:"Daniele Egpler" },
    { q: "Better sleep, improved body composition, less digestive issues, consistent energy and more.", a:"Rayyan Damaj" },
  ];
  return (
    <section className="container-page py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((t, i) => (
          <figure key={i} className="card p-6">
            <blockquote className="text-neutral-700">{t.q}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-neutral-500">— {t.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
