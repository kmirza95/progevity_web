export default function Differentiators(){
  const items = [
    {title:"Healthspan-Driven", text:"Striving to maximize your able-minded and able-bodied years via multimodal approaches."},
    {title:"Longevity-Centric", text:"Working backward from your target age to guide decade-by-decade decisions."},
    {title:"Lifespan-Catalyst", text:"Gather the tools needed to surpass the average and thrive."},
    {title:"Multidisciplinary", text:"MDs, CNS, PT, psychologist, and sleep physiologist working together."},
    {title:"Foundational Focus", text:"Prioritize majors over minors to maximize outcomes."},
    {title:"Elite Athlete Care", text:"Access to top‑tier strategies distilled into practical plans."},
  ];
  return (
    <section className="container-page py-10">
      <h2 className="text-2xl font-semibold mb-6">How we’re different</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <div className="text-xs font-semibold tracking-widest text-neutral-400">PROGEVITY</div>
            <div className="mt-2 text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-neutral-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
