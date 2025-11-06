// components/SiteNav.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/our-services', label: 'Our Services' },
    { href: '/about-progevity', label: 'About Progevity' },
  ];

  const isActive = (href) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(0,0,0,0.55)] backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="hidden sm:inline">Progevity PA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium ${isActive(href) ? 'text-white' : 'text-neutral-300 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/10"
          >
            Book
          </Link>
          <a
            href="https://progevity-pa.clientsecure.me"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/10"
          >
            Patient Portal
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-lg p-2 ring-1 ring-white/20 text-white"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="mx-auto grid max-w-7xl gap-3 px-4 py-3">
            {links.concat([{ href: '/booking', label: 'Book' }]).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-base ${isActive(href) ? 'text-white' : 'text-neutral-300 hover:text-white'}`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://progevity-pa.clientsecure.me"
              target="_blank"
              rel="noreferrer"
              className="text-base text-neutral-300 hover:text-white"
            >
              Patient Portal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
