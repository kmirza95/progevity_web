export default function FAQAccordion() {
  const items = [
    { q: "Placeholder question one?", a: "Answer coming soon." },
    { q: "Placeholder question two?", a: "Answer coming soon." },
    { q: "Placeholder question three?", a: "Answer coming soon." },
  ];

  return (
    <section className="band">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-4 divide-y divide-black/10 dark:divide-white/10 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
          {items.map((it, idx) => (
            <details key={idx} className="group open:bg-white/70 open:dark:bg-white/5">
              <summary className="cursor-pointer list-none p-4 md:p-5 flex items-center justify-between">
                <span className="font-medium">{it.q}</span>
                <span className="text-black/50 dark:text-white/50 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-4 md:px-5 pb-5 text-sm text-black/70 dark:text-white/70">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
