// components/ServiceCard.jsx
export default function ServiceCard({ eyebrow, title, children, cta, href }) {
  return (
    <article className="card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900">
      {eyebrow ? <div className="text-[#005C07] font-semibold text-xs tracking-wide mb-2">{eyebrow}</div> : null}
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">{children}</div>
      {href && cta ? (
        <div className="mt-4">
          <a href={href} className="btn-outline">{cta}</a>
        </div>
      ) : null}
    </article>
  );
}
