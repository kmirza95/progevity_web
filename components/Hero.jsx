import Link from "next/link";

export default function Hero(){
  return (
    <section className="container-page pt-8">
      <div className="relative overflow-hidden rounded-2xl shadow-soft">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-home.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-12 py-20 md:py-32 text-white">
          <h1>Seize Today, Secure Tomorrow</h1>
          <p className="mt-4 max-w-3xl text-lg opacity-95">
          Elite-Athlete Care at a Fraction of the Cost: Access a world-class multidisciplinary clinical team for your longevity journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/booking" className="btn-primary">Kickstart Your Health Journey</Link>
            <Link href="/booking" className="btn-outline bg-white/90">Open Client Portal</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
