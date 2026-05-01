'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Chi Sono', href: '/chi-sono' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-navy shadow-[0_18px_40px_-22px_rgba(0,0,0,0.24)] text-off-white ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-4">
          <div>
            <p className="font-serif text-xl font-semibold tracking-tight">
              Dott. Francesco Baldi
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-sage">
              Osteopata · Fisioterapista
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.3em] text-off-white transition-colors duration-200 hover:text-sage"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/contatti"
            className="rounded-[5px] bg-sage px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-off-white transition-all duration-200 hover:bg-sage/90"
          >
            Prenota
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-off-white transition hover:bg-white/10 md:hidden"
          aria-label="Apri menu"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full mt-2 bg-navy px-6 pb-8 shadow-2xl shadow-black/20 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base uppercase tracking-[0.3em] text-off-white transition-colors duration-200 hover:text-sage"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/contatti"
              className="inline-flex w-full items-center justify-center rounded-[5px] bg-sage px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-off-white transition-all duration-200 hover:bg-sage/90"
              onClick={() => setMenuOpen(false)}
            >
              Prenota
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
