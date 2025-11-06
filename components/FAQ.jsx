export default function FAQ(){
  const faqs = [
    {q:"Do you accept insurance?", a:"We are an out‑of‑network specialty practice. You’ll receive superbills to submit to your insurer where applicable."},
    {q:"Where do visits happen?", a:"Telehealth-first with options for select in‑person services."},
    {q:"Who is on the team?", a:"MDs, a CNS (nutrition), PT, psychologist, and sleep physiologist."},
  ];
  return (
    <section className="container-page py-12">
      <h2>FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((f,i)=> (
          <details key={i} className="card p-5 open:shadow-soft">
            <summary className="cursor-pointer text-lg font-semibold">{f.q}</summary>
            <p className="mt-2 text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
