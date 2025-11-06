export default function TestimonialCarousel(){
  const items = [
    {
      quote: 'Khalil is truly a master of his craft. With his help, I was able to lose more than 40 lbs... science backed interventions and personalized nutrition...',
      author: 'Yousef Annous, MD',
      role: 'Emergency Medicine'
    },
    {
      quote: 'I noticed a significant change in how my body feels, particularly as an athlete... recommendations on diet and natural recovery have been instrumental...',
      author: 'Daniela Eppler',
      role: 'International Lacrosse Athlete, Mexican National Team'
    },
    {
      quote: 'I have noticed several improvements in my quality of life including better sleep, improved body composition, less digestive issues, consistent energy and more.',
      author: 'Rayyan Damaj',
      role: 'Entrepreneur'
    }
  ];
  return (
    <section className="band">
      <h2 className="text-2xl font-semibold tracking-tight mb-4">What clients say</h2>
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {items.map((t, i)=> (
          <figure key={i} className="card p-5 md:p-6 bg-white dark:bg-white/5">
            <blockquote className="text-base md:text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm text-black/70 dark:text-white/70">
              <strong>{t.author}</strong>{t.role ? ` — ${t.role}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
