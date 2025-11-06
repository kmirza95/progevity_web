import "./globals.css";

export const metadata = {
  title: "Progevity PA",
  description: "Evidence-based integrative & longevity care."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
