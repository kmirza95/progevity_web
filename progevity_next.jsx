// ===============================
// Progevity — Next.js Starter (Path B)
// Tech: Next.js (App Router) + TypeScript + Tailwind + shadcn-ready
// SimplePractice-centric (no PHI on site). Drop into a new repo and run.
// ===============================

// ────────────────────────────────────────────────────────────────────────────────
// FILE: package.json
// ────────────────────────────────────────────────────────────────────────────────
{
  "name": "progevity-web",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "next-seo": "6.5.0"
  },
  "devDependencies": {
    "@types/node": "20.12.7",
    "@types/react": "18.2.66",
    "@types/react-dom": "18.2.22",
    "autoprefixer": "10.4.19",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.10",
    "typescript": "5.4.5"
  }
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: next.config.mjs
// ────────────────────────────────────────────────────────────────────────────────
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["next-seo"],
  },
};
export default nextConfig;

// ────────────────────────────────────────────────────────────────────────────────
// FILE: tailwind.config.ts
// ────────────────────────────────────────────────────────────────────────────────
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0B0B0C",
          accent: "#00A3FF",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
export default config;

// ────────────────────────────────────────────────────────────────────────────────
// FILE: postcss.config.js
// ────────────────────────────────────────────────────────────────────────────────
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// ────────────────────────────────────────────────────────────────────────────────
// FILE: tsconfig.json
// ────────────────────────────────────────────────────────────────────────────────
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: app/globals.css
// ────────────────────────────────────────────────────────────────────────────────
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{ color-scheme: light dark; }
body{ @apply bg-white text-[#0B0B0C]; }

// ────────────────────────────────────────────────────────────────────────────────
// FILE: app/layout.tsx
// ────────────────────────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Progevity PA — Integrative & Longevity Clinic",
    template: "%s — Progevity PA",
  },
  description:
    "Progevity is an integrative & longevity-focused clinic offering evidence-based care, telehealth, and personalized programs.",
  openGraph: {
    type: "website",
    title: "Progevity PA — Integrative & Longevity Clinic",
    description:
      "Personalized, evidence-based integrative and longevity care. Telehealth via SimplePractice.",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">Progevity</Link>
            <div className="flex items-center gap-3">
              <Link className="pg-btn" href="/booking">Book</Link>
              <a className="pg-btn pg-outline" href="https://progevity.clientsecure.me/sign-in" target="_blank" rel="noopener noreferrer">Patient Portal</a>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
        <footer className="border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600">
            <p>HIPAA notice: Progevity does not collect or store protected health information (PHI) on this website. All PHI is handled within the SimplePractice Client Portal.</p>
          </div>
        </footer>
        <style jsx global>{`
          .pg-btn{display:inline-flex;align-items:center;justify-content:center;padding:.6rem 1rem;border-radius:12px;background:#0B0B0C;color:#fff;font-weight:600}
          .pg-btn:hover{opacity:.9}
          .pg-outline{background:transparent;color:#0B0B0C;border:1px solid #0B0B0C}
        `}</style>
      </body>
    </html>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: app/page.tsx (Home)
// ────────────────────────────────────────────────────────────────────────────────
import Link from "next/link";
import { MedicalOrgJsonLd } from "@/lib/seo/schema";

export default function HomePage(){
  return (
    <>
      <MedicalOrgJsonLd />
      <section className="py-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Seize Today, Secure Tomorrow</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          Evidence-based integrative & longevity care. Scheduling, billing, telehealth, and secure messaging are handled through our SimplePractice Client Portal.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="pg-btn" href="/booking">Book an Appointment</Link>
          <a className="pg-btn pg-outline" href="https://progevity.clientsecure.me/" target="_blank" rel="noopener noreferrer">Open Client Portal</a>
        </div>
      </section>
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: app/booking/page.tsx
// ────────────────────────────────────────────────────────────────────────────────
import dynamic from "next/dynamic";
const ProgevityBooking = dynamic(() => import("@/components/ProgevityBooking"), { ssr: false });

export default function BookingPage(){
  return (
    <>
      <ProgevityBooking />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: app/contact/page.tsx
// ────────────────────────────────────────────────────────────────────────────────
export default function ContactPage(){
  return (
    <div className="grid gap-6 max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
      <p className="text-gray-700">For clinical questions or to share documents, please use the Client Portal (HIPAA-compliant).</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl border border-gray-200">
          <h2 className="font-semibold">General Questions (No PHI)</h2>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch shortly. For clinical matters, use the Client Portal.');}} className="mt-3 grid gap-3">
            <label className="text-sm">Name*<input required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"/></label>
            <label className="text-sm">Email*<input type="email" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"/></label>
            <label className="text-sm">Phone<input type="tel" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"/></label>
            <label className="text-sm flex gap-2"><input type="checkbox" required/> <span>I consent to be contacted. I understand this form is <b>not</b> for PHI.</span></label>
            <button className="pg-btn w-fit" type="submit">Submit</button>
          </form>
        </div>
        <div className="p-5 rounded-2xl border border-gray-200">
          <h2 className="font-semibold">Client Portal</h2>
          <p className="text-sm text-gray-700 mt-2">Schedule visits, join telehealth, message your clinician, manage billing, and upload documents.</p>
          <div className="mt-3 flex gap-3">
            <a className="pg-btn" href="https://progevity.clientsecure.me/" target="_blank" rel="noopener noreferrer">Create Account</a>
            <a className="pg-btn pg-outline" href="https://progevity.clientsecure.me/sign-in" target="_blank" rel="noopener noreferrer">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: components/ProgevityBooking.tsx
// (Imported from your previous canvas; kept identical for continuity)
// ────────────────────────────────────────────────────────────────────────────────
"use client";
import React, { useEffect, useRef, useState } from "react";

const URLS = {
  signup: "https://progevity.clientsecure.me/",
  signin: "https://progevity.clientsecure.me/sign-in",
  practitioner:
    "https://account.simplepractice.com/saml/auth?SAMLRequest=fVLLbtswEPwV3XiS9bDi1oRlwLVR1EDaCrbaQy4BTW0aAhLJcpeN%2B%2Fcl%2FUhVIPWJAHdmODPcBYqht3zl6Vnv4KcHpGSFCI6U0Wuj0Q%2Fg9uB%2BKQnfdvc1eyayyLMMQXoHE1SD7cE6ISkgJtIMmQ9szKJuJoIsSzZBVGkRFf%2FyhZTGa3pLYETdbmr2KDo5L3NxSN8dijytCijS91OYpZWAeVlOZ8VhfhegiB62GkloqlmZl1WaV2k5a4spLyte3T2wpHGGjDT9B6U7pX%2FUzDvNjUCFXIsBkJPk%2B9Xne15Ocn44g5B%2Fatsmbb7uW5Z8D9FOMQKAJceh18ij3dtK4lromGJvc%2BzFKlsuIpqf4rnlv3WlwtpFNp4vzv%2F5JehtN43plfydrPrevKwdCIKakfPAko%2FGDYJuO4g3qkufTlBOTmhUoIll10cu%2BwLdaXvCshAcKVmbwQqnMLYEx%2BDzmmCMWvehkx08LW%2FWJrmMuHDdhOPFuC5%2BIMjwZBvtWOPoEv9N8fPsP0Zfp%2BPdX%2F4B",
};

export default function ProgevityBooking() {
  const [showModal, setShowModal] = useState(false);
  const [iframeAllowed, setIframeAllowed] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!showModal || !iframeRef.current) return;
    const timer = setTimeout(() => {
      try {
        if (!iframeRef.current?.contentDocument) {
          setIframeAllowed(false);
        }
      } catch { setIframeAllowed(false); }
    }, 1200);
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Book with Progevity</h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          We use <span className="font-medium">SimplePractice</span> for scheduling, billing, telehealth, and secure messaging. All PHI stays in the Client Portal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <CtaCard title="New Patient" desc="Create your Client Portal account and request an appointment." actionLabel="Begin in Client Portal" onClick={() => setShowModal(true)} />
        <CtaCard title="Existing Patient" desc="Sign in to manage appointments, billing, and telehealth." actionLabel="Sign In" href={URLS.signin} />
        <CtaCard title="Practitioner Login" desc="Authorized Progevity practitioners sign in here." actionLabel="Practitioner SSO" href={URLS.practitioner} />
      </div>

      <div className="mt-10 p-5 md:p-6 rounded-2xl border border-gray-200 bg-white/70 shadow-sm">
        <h2 className="text-xl font-semibold">Optional — Tell us how to reach you</h2>
        <p className="text-sm text-gray-600 mt-1">Please do <b>not</b> include medical details. For clinical questions, use the Client Portal.</p>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll reach out if needed. Redirecting to the Client Portal…'); setShowModal(true);}}>
          <Input name="name" label="Full name" placeholder="Jane Doe" required />
          <Input name="email" type="email" label="Email" placeholder="jane@example.com" required />
          <Input name="phone" type="tel" label="Phone" placeholder="(555) 555-5555" />
          <Input name="referrer" label="How did you hear about us?" placeholder="Google, referral, social…" />
          <div className="md:col-span-2 flex items-start gap-2 text-sm mt-2">
            <input type="checkbox" required className="mt-1" id="consent" />
            <label htmlFor="consent">I consent to be contacted. I acknowledge this form is <b>not for PHI</b> and agree to the Privacy Policy.</label>
          </div>
          <div className="md:col-span-2"><button type="submit" className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-black text-white font-medium hover:opacity-90">Continue to Client Portal</button></div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal>
          <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h3 className="text-lg font-semibold">Create your Client Portal account</h3>
              <button onClick={() => setShowModal(false)} className="rounded-full p-2 hover:bg-gray-100" aria-label="Close">✕</button>
            </div>
            <div className="relative h-[70vh]">
              {iframeAllowed ? (
                <iframe ref={iframeRef} title="SimplePractice — Progevity Signup" src={URLS.signup} className="w-full h-full" allow="clipboard-write; accelerometer; gyroscope" />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-sm text-gray-600 max-w-md">Your browser or SimplePractice may block embedding for security. Open the Client Portal in a new tab to continue.</p>
                  <a href={URLS.signup} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex px-5 py-2.5 rounded-xl bg-black text-white font-medium hover:opacity-90">Open Client Portal</a>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-t text-sm">
              <div className="text-gray-600">Trouble? Use the direct link: <a href={URLS.signup} target="_blank" rel="noopener noreferrer" className="underline">progevity.clientsecure.me</a></div>
              <a href={URLS.signin} target="_blank" rel="noopener noreferrer" className="underline">Existing patient sign in</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CtaCard({ title, desc, actionLabel, href, onClick }: { title: string; desc: string; actionLabel: string; href?: string; onClick?: () => void; }) {
  const content = (
    <div className="p-5 md:p-6 h-full rounded-2xl border border-gray-200 bg-white/70 shadow-sm flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 flex-1">{desc}</p>
      <div className="mt-4"><span className="inline-flex px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90">{actionLabel}</span></div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-black/50 rounded-2xl">{content}</a>
  ) : (
    <button onClick={onClick} className="text-left focus:outline-none focus:ring-2 focus:ring-black/50 rounded-2xl w-full">{content}</button>
  );
}

function Input({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; }) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700 font-medium">{label}{required ? " *" : ""}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className="mt-1 w-full rounded-xl border border-gray-300 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-black/30" />
    </label>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: lib/seo/schema.ts (MedicalOrganization + Physician JSON-LD)
// ────────────────────────────────────────────────────────────────────────────────
"use client";
import Script from "next/script";

export function MedicalOrgJsonLd(){
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Progevity PA",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://progevity.health",
    logo: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/og.png` : undefined,
    medicalSpecialty: [
      "IntegrativeMedicine",
      "Nutrition",
      "PreventiveCare",
      "SportsMedicine",
      "Geriatrics"
    ],
    sameAs: [
      "https://progevity.health",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Patient inquiries",
      telephone: "+1-410-292-6657",
      email: "kmirza@progevity.health"
    }
  };
  return (
    <Script id="jsonld-medorg" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// FILE: .env.example
// ────────────────────────────────────────────────────────────────────────────────
# Public site URL (used for SEO metadata and OG tags)
NEXT_PUBLIC_SITE_URL=https://progevity.health

# Optional: Google Analytics 4 (if you want to add later)
NEXT_PUBLIC_GA_ID=G-XXXXXXX

// ────────────────────────────────────────────────────────────────────────────────
// FILE: next-env.d.ts (auto-generated by Next on first run, included here for clarity)
// ────────────────────────────────────────────────────────────────────────────────
/// <reference types="next" />
/// <reference types="next/image-types/global" />
// NOTE: This file should not be edited

// ===============================
// Setup & Run
// ===============================
// 1) Create a new folder and paste these files following the indicated paths.
// 2) npm install
// 3) npm run dev
// 4) Visit http://localhost:3000 — Booking page at /booking
// 5) Set NEXT_PUBLIC_SITE_URL in a real .env file for correct SEO URLs.
