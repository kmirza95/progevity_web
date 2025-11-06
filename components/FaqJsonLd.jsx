// components/FaqJsonLd.jsx
'use client';

export default function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Placeholder question one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Answer coming soon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Placeholder question two?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Answer coming soon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Placeholder question three?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Answer coming soon.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
