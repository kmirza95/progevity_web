import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "About Progevity — Progevity PA" };

export default function Page() {
  const steps = [
    "Foundational Longevity Assessment",
    "Data‑Driven Diagnostics & Profiling",
    "Integrated Care Planning & Expert Review",
  ];

  const foundingPartners = [
    {
      name: "Khalil Z. Mirza, Certified Nutrition Specialist®, MS, BS",
      title: "Founding Partner",
    },
    {
      name: "Dr. Ziad K. Mirza, MD, CPE, CMD, FACP, MBA, ABIM, ABPM/UHM",
      title: "Founding Partner",
    },
  ];

  const independentClinicalLeadership = [
    {
      name: "TrueSports PT",
      title: "Physical Therapy & Mobility Leadership",
    },
    {
      name: "Dr. Wendy Troxel, PhD",
      title: "Behavioral Sleep Medicine & Sleep Health Leadership",
    },
    {
      name: "Dr. (TBD), PhD",
      title: "Psychology Leadership",
    },

    {
      name: "Dr. Youssef Annous, MD",
      title: "Longevity Science Leadership",
    },
  ];

  const partneringClinicalOrganizations = [
    {
      name: "Sports & Performance Cardiology",
      title: "Cardiopulmonary Leadership",
    },
    {
      name: "Calorify",
      title: "Metabolism Leadership",
    },
    {
      name: "Advanced Radiology",
      title: "Musculoskeletal Leadership",
    },
    {
      name: "Xpan",
      title: "Longevity Diagnostics Leadership",
    },
    {
      name: "Organization Name",
      title: "Clinical Partner",
    },
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
            <a href="/booking" className="btn-primary">
              Book your Initial Consultation
            </a>
            <a href="/our-services" className="btn-outline">
              See Our Services
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-4 sm:p-6">
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-100 text-sm font-medium text-neutral-500">
              Video Placeholder
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Meet Your Clinical Team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
              Coordinated care, led by experts
            </h2>
            <p className="mt-4 text-neutral-700">
              Add a short introduction here about the clinicians patients will meet, how the team works together,
              and why coordinated multidisciplinary care matters. This placeholder copy can be replaced later with
              your final language.
            </p>
            <p className="mt-3 text-neutral-700">
              You can also use this area to explain how diagnostics, case review, and direct practitioner
              communication come together inside the Progevity model.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="mt-2 text-neutral-700">
              To extend healthspan by delivering high‑impact care across the four pillars of longevity—nutrition,
              movement, sleep, and mental health—while integrating advanced diagnostics and expert case reviews.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Our Ethos</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-700">
              <li>Prioritize the majors over the minors.</li>
              <li>Use data to personalize plans and verify progress.</li>
              <li>An ounce of prevention is worth a pound of cure.</li>
              <li>
                Coordinate expert, multidisciplinary teams: medical doctors, nutritionists, physical therapists,
                psychologists, and sleep physiologists.
              </li>
              <li>
                Transparent communication—patients own their data and have on-demand access to clinical reports and
                clinicians.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="card p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Powered by global longevity experts
            </h2>
            <p className="mt-3 max-w-3xl text-neutral-700">
              A team of deep global expertise helps shape Progevity’s approach to preventive, restorative, and
              performance-oriented care.
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Founding Clinical Partners
                </h3>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {foundingPartners.map((person) => (
                  <article key={person.name}>
                    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 text-sm font-medium text-neutral-500">
                      Photo Placeholder
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold text-neutral-900">{person.name}</div>
                      <div className="text-sm text-neutral-600">{person.title}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Independent Clinical Leadership
                </h3>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {independentClinicalLeadership.map((person) => (
                  <article key={person.name}>
                    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 text-sm font-medium text-neutral-500">
                      Photo Placeholder
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold text-neutral-900">{person.name}</div>
                      <div className="text-sm text-neutral-600">{person.title}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Partnering Clinical Organizations
                </h3>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {partneringClinicalOrganizations.map((person, idx) => (
                  <article key={`${person.name}-${idx}`}>
                    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 text-sm font-medium text-neutral-500">
                      Photo Placeholder
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold text-neutral-900">{person.name}</div>
                      <div className="text-sm text-neutral-600">{person.title}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2>How your care flows</h2>
          <ol className="mt-4 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step} className="card p-6">
                <div className="pill bg-neutral-900 text-white w-min">{i + 1}</div>
                <div className="mt-3 font-semibold">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
}
