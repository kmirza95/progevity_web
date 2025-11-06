import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Our Services — Progevity PA" };

const blocks = [
  {
    tag:"START HERE",
    title:"Foundational Longevity Assessment (Initial Consultation)",
    bullets:[
      "Two MD consults + CNS (nutrition) + PT + sleep psychologist input",
      "Personalized plan via Client Portal",
      "Baseline testing: metabolic, genomics/pharmacogenomics, microbiome, cardiometabolic & nutrition panel"
    ],
    cta:"Begin Your Assessment"
  },
  {
    tag:"DEEP DIVE",
    title:"Data-Driven Diagnostics & Profiling",
    bullets:[
      "Metabolic & cardiometabolic profiling",
      "Genomic risk mapping & escalation to imaging when indicated",
      "Microbiome balance & nutrient absorption"
    ],
    cta:"Explore Your Data"
  },
  {
    tag:"SYNTHESIS",
    title:"Integrated Care Planning & Expert Review",
    bullets:[
      "Team synthesis: MDs, CNS, PT, psychologist, sleep physiologist",
      "Practical plan: CBT-I + circadian + resistance + nutraceutical optimization"
    ],
    cta:"See How It Works"
  },
  {
    tag:"ONGOING",
    title:"Ongoing Longevity Management (Monthly)",
    bullets:[
      "Monthly 3+1 model (3h direct care + 1h expert case conference)",
      "Quarterly biomarker reassessment & goal tracking"
    ],
    cta:"Join the Program"
  },
  {
    tag:"MOVEMENT",
    title:"Physical Performance & Rehabilitation",
    bullets:[
      "Evidence-based rehab & progressive resistance",
      "Injury risk mitigation and healthy‑aging strength work"
    ],
    cta:"Partner PT Options"
  },
  {
    tag:"RECOVERY",
    title:"Sleep, Stress & Mental Resilience",
    bullets:[
      "PSQI + biowearables; CBT‑I & stress modulation",
      "Collaboration with CNS & psychologist for optimization"
    ],
    cta:"Improve Sleep & Recovery"
  }
];

export default function Page(){
  return (
    <>
      <Navbar />
      <section className="container-page py-10">
        <div className="card p-8 bg-white">
          <h1>Longevity‑centric, multidisciplinary care</h1>
          <p className="mt-2 text-neutral-600">Built around high‑impact interventions and coordinated expert reviews.</p>
          <div className="mt-6"><a href="/booking" className="btn-primary">Book</a></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blocks.map(b => (
            <article key={b.title} className="card p-6">
              <div className="text-xs font-semibold tracking-widest text-neutral-400">{b.tag}</div>
              <h3 className="mt-2 text-lg font-semibold">{b.title}</h3>
              <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-1">
                {b.bullets.map((li,i)=>(<li key={i}>{li}</li>))}
              </ul>
              <div className="mt-4"><a href="/booking" className="btn-outline">{b.cta}</a></div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
