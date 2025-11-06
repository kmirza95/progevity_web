// components/HeroSubpage.jsx
export default function HeroSubpage({ title, subtitle, image = "/hero-subpage.jpg" }) {
  return (
    <section className="relative rounded-2xl overflow-hidden bg-neutral-950 mb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-[1]" />
      <img src={image} alt="" className="w-full h-[40vh] object-cover" />
      <div className="absolute inset-0 grid place-items-center z-[2] px-4 text-center text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="mt-3 text-lg max-w-3xl mx-auto text-white/90">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}
