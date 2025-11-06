// components/VideoHero.jsx
export default function VideoHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-[70vh] w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="pro-hero-gradient absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Seize Today, Secure Tomorrow
        </h1>
        <p className="mt-5 max-w-3xl text-white/85">
          Evidence-based integrative & longevity care. Scheduling, billing, telehealth, and
          secure messaging are handled through our SimplePractice Client Portal.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/booking"
            className="inline-flex items-center rounded-full bg-green-600 px-5 py-2.5 text-white hover:bg-green-700"
          >
            Kickstart Your Health Journey
          </a>
          <a
            href="https://progevity.clientsecure.me"
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-white hover:bg-white/20"
          >
            Open Client Portal
          </a>
        </div>
      </div>
    </section>
  );
}
