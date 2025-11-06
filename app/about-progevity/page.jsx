import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "About Progevity — Progevity PA" };

export default function Page(){
  const steps = [
    "Foundational Longevity Assessment",
    "Data‑Driven Diagnostics & Profiling",
    "Integrated Care Planning & Expert Review"
  ];
  return (
    <>
      <Navbar />
      <section className="container-page py-10">
        <div className="card p-8">
          <h1>Shifting healthcare toward meaningful, measurable outcomes</h1>
          <p className="mt-2 text-neutral-600">
            We focus on the majors, integrate a multidisciplinary team, and make data actionable.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/booking" className="btn-primary">Book your Initial Consultation</a>
            <a href="/our-services" className="btn-outline">See Our Services</a>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-2 text-neutral-700">
              To extend healthspan by delivering high‑impact care across the four pillars of longevity—nutrition,
              movement, sleep, and mental health—while integrating advanced diagnostics and expert case reviews.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Our Ethos</h3>
            <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-1">
              <li>Prioritize the majors over the minors.</li>
              <li>Use data to personalize plans and verify progress.</li>
              <li>Coordinate a true team: MDs, CNS, PT, psychologist, and sleep physiologist.</li>
              <li>Communicate clearly—everything lives in the Client Portal.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2>How your care flows</h2>
          <ol className="mt-4 grid md:grid-cols-3 gap-6">
            {steps.map((s, i)=> (
              <li key={s} className="card p-6">
                <div className="pill bg-neutral-900 text-white w-min">{i+1}</div>
                <div className="mt-3 font-semibold">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </>
  )
}
