export const metadata = { title: "Terms of Use" };

export default function TermsPage(){
  return (
    <section className="band container prose prose-neutral max-w-3xl dark:prose-invert">
      <h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p>By using this site, you agree not to submit protected health information (PHI) through public forms. Online care services are provided only through our Client Portal and subject to clinician availability and state licensure.</p>
      <h2>Website Content</h2>
      <p>Content is informational and not a substitute for medical advice. Always consult a qualified clinician for diagnosis and treatment.</p>
      <h2>Limitation of Liability</h2>
      <p>Progevity PA is not liable for damages arising from site use. Services delivered through the Client Portal are governed by separate agreements.</p>
    </section>
  );
}
