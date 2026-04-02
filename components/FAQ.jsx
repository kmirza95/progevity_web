"use client";

import FAQAccordion from "./FAQAccordion";
import FaqJsonLd from "./FaqJsonLd";

const faqs = [
  {
    question: "What kind of practice is Progevity PA?",
    answer:
      "Progevity PA is a physician-owned, integrative and longevity-focused specialty practice. We concentrate on healthspan, prevention, and complex metabolic and lifestyle questions. We are not an urgent care or traditional primary-care clinic, and we work best alongside your existing PCP and specialists."
  },
  {
    question: "Are you in-network with insurance?",
    answer:
      "No. Progevity PA is an out-of-network specialty practice. We do not bill insurance directly. When applicable, you’ll receive detailed superbills that you may submit to your insurer for possible out-of-network reimbursement."
  },
  {
    question: "How do visits happen—telehealth or in-person?",
    answer:
      "We are telehealth-first, with options for select in-person services. Most visits occur by secure video through our HIPAA-compliant client portal, which also hosts scheduling, billing, messaging, and document sharing."
  },
  {
    question: "Who is on my care team?",
    answer:
      "Your care is delivered by a coordinated team that may include MDs, a Certified Nutrition Specialist (CNS), physical therapist, psychologist, and sleep physiologist. The specific mix depends on your case and the service tier you enroll in."
  },
  {
    question: "What does a typical care journey look like?",
    answer:
      "Most patients begin with a foundational longevity assessment that includes detailed history, baseline testing, and an initial integrated plan. From there, we progress through phases: deeper diagnostics when indicated, synthesis of findings, and ongoing management with periodic reassessment to track progress and update your plan."
  },
  {
    question: "How do you use labs, genomics, and other testing?",
    answer:
      "Our strategy documents emphasize using diagnostics to guide decisions—not to collect data for its own sake. We prioritize tests with strong clinical relevance to longevity, cardiometabolic risk, and function, and we use them to create clear, staged action plans rather than long, confusing lab reports."
  },
  {
    question: "How is Progevity PA related to other Progevity or Xpan entities?",
    answer:
      "Progevity PA is a Maryland professional association that is physician-owned and clinically led. Other entities in the broader ecosystem may focus on technology, education, or business operations, but clinical decisions, standards of care, and medical policies are set by Progevity PA’s licensed clinicians and governing board."
  },
  {
    question: "Do you sell supplements or have financial conflicts of interest?",
    answer:
      "The bylaws and strategy documents are explicit that clinical recommendations must be evidence-informed and patient-centered. Any relationships with third-party vendors (for example, labs or supplement companies) must be disclosed and may not override clinical judgment or patient choice."
  },
  {
    question: "What if I have a concern or I’m unhappy with my care?",
    answer:
      "Progevity PA’s governance structure includes clear channels for feedback and quality review. You can raise concerns through the client portal or directly with your clinician. The medical director and board are responsible for addressing quality issues, reviewing patterns, and updating policies when needed."
  },
  {
    question: "How do you protect my privacy and health information?",
    answer:
      "We use HIPAA-compliant systems for scheduling, telehealth, billing, and secure messaging. Protected health information is kept within these systems and governed by professional standards, state law, and the Progevity PA bylaws, which prioritize confidentiality and responsible data use."
  }
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-50/60 to-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            Practical answers to the most common questions about how Progevity
            PA works as an out-of-network, longevity-focused specialty
            practice.
          </p>
        </div>

        <FAQAccordion items={faqs} />
        <FaqJsonLd faqs={faqs} />
      </div>
    </section>
  );
}
