import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Book — Progevity PA" };

const EXISTING = "https://progevity.clientsecure.me/sign-in";
const NEW = "https://progevity.clientsecure.me/request/service";
const PORTAL = "https://progevity.clientsecure.me";

export default function Page(){
  return (
    <>
      <Navbar />
      <section className="container-page py-8">
        <h1>Book with Progevity</h1>
        <p className="mt-2 text-neutral-600">
          Use SimplePractice for scheduling, billing, telehealth, and secure messaging. All steps happen through our Client Portal.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={PORTAL} className="btn-outline">Open Client Portal</a>
          <a href={NEW} className="btn-outline">New Patient? Start here</a>
        </div>

        <div className="card mt-6 p-0 overflow-hidden">
          <div className="px-4 py-2 text-sm text-neutral-500 border-b">Client Portal (embedded preview)</div>
          <iframe
            src={PORTAL}
            className="w-full h-[70vh]"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
          />
          <div className="px-4 py-2 text-sm text-neutral-500 border-t">
            Trouble with the embedded view? <a href={PORTAL} className="underline">Open the Client Portal in a new tab</a>.
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
