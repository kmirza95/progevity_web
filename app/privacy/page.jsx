export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage(){
  return (
    <section className="band container prose prose-neutral max-w-3xl dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
      <p>Progevity PA respects your privacy. We do not collect or store protected health information (PHI) on this website. All PHI is handled exclusively within our SimplePractice Client Portal.</p>
      <h2>What we collect on this site</h2>
      <ul>
        <li>Basic analytics and performance data (non-PHI) to improve the site.</li>
        <li>Optional contact details from the non-PHI inquiry form.</li>
      </ul>
      <h2>What we do not collect here</h2>
      <ul>
        <li>No medical history, diagnoses, or treatment information.</li>
        <li>No insurance numbers or sensitive identifiers.</li>
      </ul>
      <h2>Client Portal</h2>
      <p>Scheduling, billing, telehealth, secure messaging, and document uploads are handled by SimplePractice. Review their policies within the Client Portal.</p>
    </section>
  );
}
