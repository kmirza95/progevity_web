import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Book — Progevity PA" };

const PATIENT_SIGN_IN = "https://progevity.clientsecure.me/sign-in";
const PATIENT_SIGN_UP = "https://progevity.clientsecure.me";
const PRACTITIONER_LOGIN =
  "https://account.simplepractice.com/saml/auth?SAMLRequest=fVLLbtswEPwV3XiS9bDi1oRlwLVR1EDaCrbaQy4BTW0aAhLJcpeN%2B%2Fcl%2FUhVIPWJAHdmODPcBYqht3zl6Vnv4KcHpGSFCI6U0Wuj0Q%2Fg9uB%2BKQnfdvc1eyayyLMMQXoHE1SD7cE6ISkgJtIMmQ9szKJuJoIsSzZBVGkRFf%2FyhZTGa3pLYETdbmr2KDo5L3NxSN8dijytCijS91OYpZWAeVlOZ8VhfhegiB62GkloqlmZl1WaV2k5a4spLyte3T2wpHGGjDT9B6U7pX%2FUzDvNjUCFXIsBkJPk%2B9Xne15Ocn44g5B%2Fatsmbb7uW5Z8D9FOMQKAJceh18ij3dtK4lromGJvc%2BzFKlsuIpqf4rnlv3WlwtpFNp4vzv%2F5JehtN43plfydrPrevKwdCIKakfPAko%2FGDYJuO4g3qkufTlBOTmhUoIll10cu%2BwLdaXvCshAcKVmbwQqnMLYEx%2BDzmmCMWvehkx08LW%2FWJrmMuHDdhOPFuC5%2BIMjwZBvtWOPoEv9N8fPsP0Zfp%2BPdX%2F4B";

function Button({ href, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600"
      : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline-neutral-400";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="container-page py-10">
        <h1>Book with Progevity</h1>
        <p className="mt-2 max-w-3xl text-neutral-600">
          Scheduling, billing, telehealth, and secure messaging are handled through our
          SimplePractice Client Portal.
        </p>

        {/* Primary actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={PATIENT_SIGN_UP} variant="primary">
            New Patient — Create an Account
          </Button>
          <Button href={PATIENT_SIGN_IN} variant="secondary">
            Existing Patient — Sign In
          </Button>
        </div>

        {/* Two-column cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold">New patients</h2>
            <p className="mt-2 text-neutral-600">
              Create your portal account to request an appointment and complete any required
              intake forms.
            </p>
            <ol className="mt-4 list-decimal pl-5 text-sm text-neutral-600 space-y-1">
              <li>Create your Client Portal account</li>
              <li>Request your preferred appointment time</li>
              <li>Complete forms (if prompted) and confirm</li>
            </ol>

            <div className="mt-5">
              <Button href={PATIENT_SIGN_UP} variant="primary">
                Create Portal Account
              </Button>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold">Existing patients</h2>
            <p className="mt-2 text-neutral-600">
              Sign in to schedule, view upcoming appointments, message securely, access
              telehealth links, and manage billing.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-600 space-y-1">
              <li>Schedule or reschedule appointments</li>
              <li>Telehealth access (when applicable)</li>
              <li>Secure messaging and billing</li>
            </ul>

            <div className="mt-5">
              <Button href={PATIENT_SIGN_IN} variant="secondary">
                Open Client Portal Sign‑In
              </Button>
            </div>
          </div>
        </div>

        {/* Trust / policy blocks */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold">What happens next</h3>
            <p className="mt-2 text-sm text-neutral-600">
              After you request a time, you’ll receive a portal confirmation and any next-step
              instructions through SimplePractice.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Cancellation / reschedule</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Please use the portal to reschedule as early as possible. Same‑day changes may be
              subject to policy.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Important note</h3>
            <p className="mt-2 text-sm text-neutral-600">
              This booking system is not for emergencies. If you have an emergency, call local
              emergency services.
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-neutral-500">
          <p>
            Trouble accessing the portal? Try opening it in a private/incognito window or a
            different browser.
          </p>
          <p className="mt-2">
            Practitioner access:{" "}
            <a
              href={PRACTITIONER_LOGIN}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              SimplePractice practitioner login
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
