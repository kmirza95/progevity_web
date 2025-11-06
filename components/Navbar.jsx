"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/about-progevity", label: "About" },
  { href: "/booking", label: "Book" },
];
export default function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-neutral-200 bg-white/70">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">Progevity PA</Link>
        <nav className="flex items-center gap-2">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-100 ${pathname===l.href ? "bg-neutral-900 text-white" : "text-neutral-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="ml-2 btn-primary">Book</Link>
        </nav>
      </div>
    </header>
  );
}
