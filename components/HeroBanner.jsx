/* components/HeroBanner.jsx */
import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-fallback.jpg"
        >
          <source src="/hero-home.mp4" type="video/mp4" />
          <Image
            src="/hero-fallback.jpg"
            alt="Wellness background"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Seize Today, Secure Tomorrow
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-3xl mx-auto">
          Evidence-based integrative &amp; longevity care. Scheduling, billing, telehealth, and secure
          messaging are handled through our SimplePractice Client Portal.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/booking"
            className="rounded-full bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-500 transition shadow"
          >
            Kickstart Your Health Journey
          </a>
          <a
            href="https://www.simplepractice.com/"
            target="_blank"
            className="rounded-full bg-white/90 text-neutral-900 px-5 py-3 font-medium hover:bg-white transition shadow"
          >
            Open Client Portal
          </a>
        </div>
      </div>
    </section>
  );
}
