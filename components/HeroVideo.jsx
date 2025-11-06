// components/HeroVideo.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroVideo({
  title = "Seize Today, Secure Tomorrow",
  subtitle = "Evidence-based integrative & longevity care. Scheduling, billing, telehealth, and secure messaging are handled through our SimplePractice Client Portal.",
  ctaPrimary = { href: "/booking", label: "Kickstart Your Health Journey" },
  ctaSecondary = { href: "https://portal.simplepractice.com", label: "Open Client Portal", external: true },
  poster = "/hero-home.jpg",
  src = "/hero-home.mp4"
}) {
  const videoRef = useRef(null);
  const [usePoster, setUsePoster] = useState(false);

  useEffect(() => {
    // Try to play the video; fall back to poster if fail or not found
    const v = videoRef.current;
    if (!v) return;
    const onError = () => setUsePoster(true);
    v.addEventListener("error", onError);
    v.play().catch(() => setUsePoster(true));
    return () => v.removeEventListener("error", onError);
  }, []);

  return (
    <section className="hero">
      {!usePoster ? (
        <video
          ref={videoRef}
          className="hero-media"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img className="hero-media" src={poster} alt="" />
      )}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" href={ctaPrimary.href}>{ctaPrimary.label}</Link>
          {ctaSecondary.external ? (
            <a className="btn btn-secondary" href={ctaSecondary.href} target="_blank" rel="noreferrer">
              {ctaSecondary.label}
            </a>
          ) : (
            <Link className="btn btn-secondary" href={ctaSecondary.href}>
              {ctaSecondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
