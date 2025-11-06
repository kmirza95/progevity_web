'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

/**
 * Header.jsx
 * - Center navbar with Home, Our Services, About
 * - Active link highlighting using usePathname()
 * - Mobile menu that collapses/expands
 * - Preserves Book, Patient Portal, Theme actions
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <nav className="container header-bar">
        <Link href="/" className="brand" aria-label="Progevity home">
          <img src="/logo-green.png" alt="Progevity logo" width="28" height="28" />
          <span>Progevity PA</span>
        </Link>

        {/* Center nav (desktop) */}
        <div className="nav-center" role="navigation" aria-label="Primary">
          <Link href="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
          <Link href="/our-services" className={`nav-link${isActive('/our-services') ? ' active' : ''}`}>Our Services</Link>
          <Link href="/about-progevity" className={`nav-link${isActive('/about-progevity') ? ' active' : ''}`}>About</Link>
        </div>

        {/* Right actions */}
        <div className="actions">
          <Link className="btn-primary" href="/booking">Book</Link>
          <a className="btn-outline" href="https://progevity.clientsecure.me/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
          <button id="theme-toggle" className="btn-outline" aria-label="Toggle dark mode">Theme</button>
          <button
            className="mobile-toggle"
            aria-label="Open navigation"
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile nav sheet */}
      <div id="mobile-nav" className={`mobile-sheet${open ? ' open' : ''}`}>
        <Link href="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
        <Link href="/our-services" className={`nav-link${isActive('/our-services') ? ' active' : ''}`}>Our Services</Link>
        <Link href="/about-progevity" className={`nav-link${isActive('/about-progevity') ? ' active' : ''}`}>About</Link>
        <div className="mobile-actions">
          <Link className="btn-primary full" href="/booking">Book</Link>
          <a className="btn-outline full" href="https://progevity.clientsecure.me/" target="_blank" rel="noopener noreferrer">Patient Portal</a>
        </div>
      </div>

      {/* Keep your existing Theme toggler logic here so it's always available */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try{
                const btn = document.getElementById('theme-toggle');
                if(!btn) return;
                btn.addEventListener('click', function(){
                  const root = document.documentElement;
                  const isDark = root.classList.toggle('dark');
                  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch(e){}
                });
              }catch(e){}
            })();
          `,
        }}
      />

      {/* Component-scoped styles (no Tailwind required) */}
      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 40;
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.72);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        :global(html.dark) .site-header {
          background: rgba(0,0,0,0.28);
          border-bottom-color: rgba(255,255,255,0.12);
        }
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: inherit;
          text-decoration: none;
        }
        .nav-center {
          display: none;
          gap: 16px;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
        }
        .nav-link {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 9999px;
          text-decoration: none;
          color: inherit;
          opacity: 0.86;
          transition: background .15s ease, opacity .15s ease, transform .05s ease;
        }
        .nav-link:hover { opacity: 1; background: rgba(0,0,0,0.06); }
        :global(html.dark) .nav-link:hover { background: rgba(255,255,255,0.08); }
        .nav-link.active {
          font-weight: 600;
          background: rgba(16,185,129,0.18);
          color: inherit;
        }
        :global(html.dark) .nav-link.active {
          background: rgba(34,197,94,0.18);
        }
        .actions {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.1);
          background: transparent;
          cursor: pointer;
        }
        :global(html.dark) .mobile-toggle {
          border-color: rgba(255,255,255,0.2);
          color: #fff;
        }
        /* Mobile sheet (hidden by default) */
        .mobile-sheet {
          display: none;
          flex-direction: column;
          gap: 8px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding: 10px 16px 14px;
        }
        :global(html.dark) .mobile-sheet {
          border-bottom-color: rgba(255,255,255,0.12);
        }
        .mobile-sheet .nav-link {
          padding: 10px 12px;
        }
        .mobile-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 8px;
        }
        .mobile-actions .full {
          width: 100%;
          justify-content: center;
        }
        /* Breakpoints */
        @media (min-width: 900px) {
          .nav-center { display: flex; }
          .mobile-toggle { display: none; }
          .mobile-sheet { display: none !important; }
        }
      `}</style>
    </header>
  );
}
