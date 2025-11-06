// components/SeoJsonLd.jsx
// Minimal JSON‑LD injector for Progevity PA
// Usage: <SeoJsonLd /> (site defaults) or <SeoJsonLd data={...} />
'use client';
import React from 'react';

const defaultData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Progevity PA",
  "url": "https://progevity.health",
  "logo": "/favicon.svg",
  "telephone": "+1-555-555-5555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Example Rd",
    "addressLocality": "Baltimore",
    "addressRegion": "MD",
    "postalCode": "21201",
    "addressCountry": "US"
  },
  "areaServed": "US",
  "medicalSpecialty": ["Nutrition", "IntegrativeMedicine", "PreventiveCare"]
};

export default function SeoJsonLd({ data }) {
  const json = JSON.stringify(data || defaultData);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
