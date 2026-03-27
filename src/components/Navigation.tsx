"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Locale, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface NavigationProps {
  dict: Dictionary;
  locale: Locale;
}

const localeLabels: Record<Locale, string> = {
  en: "EN",
  ja: "JP",
  ko: "KR",
};

export default function Navigation({ dict, locale }: NavigationProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (loc: Locale) => {
    const hash = window.location.hash;
    router.push(`/${loc}${hash}`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#projects", label: dict.nav.projects },
    { href: "#services", label: dict.nav.services },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-display font-semibold text-lg tracking-tight text-white hover:text-accent transition-colors"
        >
          MSK<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-light hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-4 border-l border-white/10 pl-4">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`text-xs px-2 py-1 rounded transition-all ${
                  locale === loc
                    ? "bg-accent/20 text-accent font-medium"
                    : "text-muted hover:text-white"
                }`}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted-light hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { switchLocale(loc); setMenuOpen(false); }}
                  className={`text-sm px-3 py-1.5 rounded transition-all ${
                    locale === loc
                      ? "bg-accent/20 text-accent font-medium"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
