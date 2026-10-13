"use client";
import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Main Page", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "All products", href: "/allproducts" },
  { label: "All sales", href: "/allsales" },
  {label: "All categories" , href: "/allcategories"},
];

export default function Header({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const [bump, setBump] = useState(false);

  // Hozirgi sahifani aniqlash
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // Scroll bo'lganda header kichrayadi va soya paydo bo'ladi
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Savatga mahsulot qo'shilganda badge sakraydi
  useEffect(() => {
    if (cartCount === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [cartCount]);

  // Mobil menyu ochiq bo'lganda sahifa scrollini to'xtatish
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @keyframes hdr-drop {
          from { opacity: 0; transform: translateY(-100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hdr-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
        @keyframes hdr-ping {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes hdr-link-in {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hdr-anim, .hdr-anim * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <header
        className={`hdr-anim sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-[#EAEAEA] shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)]"
            : "bg-white border-[#EAEAEA]"
        }`}
        style={{ animation: "hdr-drop .6s cubic-bezier(.22,1,.36,1) both" }}
      >
        <div
          className={`max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[68px]" : "h-[92px]"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="Home">
            <div
              className={`relative rounded-full bg-gradient-to-br from-[#43b343] to-[#2a8a2a] flex items-center justify-center shadow-[0_6px_16px_-6px_rgba(51,153,51,0.7)] transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 ${
                scrolled ? "w-[42px] h-[42px]" : "w-[52px] h-[52px]"
              }`}
            >
              <span className="absolute inset-0 rounded-full bg-[#339933] opacity-0 group-hover:opacity-100 group-hover:animate-[hdr-ping_1s_ease-out_infinite]" />
              <svg
                viewBox="0 0 40 40"
                className={`relative fill-white transition-all duration-300 ${
                  scrolled ? "w-[24px] h-[24px]" : "w-[30px] h-[30px]"
                }`}
              >
                <path
                  d="M20 28.5C18.6 28.5 17.5 28.9 16.5 29.5C14.8 28.2 12.8 27.5 10.5 27.5C8.8 27.5 7.2 27.9 5.8 28.7C7.2 34.2 12.2 38.2 18.2 38.5C18.7 37.6 19.3 36.8 20 36.2C20.7 36.8 21.3 37.6 21.8 38.5C27.8 38.2 32.8 34.2 34.2 28.7C32.8 27.9 31.2 27.5 29.5 27.5C27.2 27.5 25.2 28.2 23.5 29.5C22.5 28.9 21.4 28.5 20 28.5Z"
                  opacity="0.3"
                />
                <path d="M20 31.5C20.8 31.5 21.5 30.8 21.5 30V20.8C24.4 20.3 26.6 17.8 26.6 14.8C26.6 11.2 23.8 8.4 20.2 8.4C18.5 8.4 16.9 9.1 15.7 10.3C13.2 8.6 9.8 8.8 7.5 11.1C5.2 13.4 5 16.8 6.7 19.3C7.9 18.1 9.6 17.4 11.3 17.4C14.4 17.4 17 19.7 17.5 22.8C18.2 22.9 18.5 23.4 18.5 24V30C18.5 30.8 19.2 31.5 20 31.5ZM11.3 19.4C9.5 19.4 8 20.9 8 22.7C8 24.5 9.5 26 11.3 26C13.1 26 14.6 24.5 14.6 22.7C14.6 20.9 13.1 19.4 11.3 19.4Z" />
                <path d="M20 33v-12c0-3.3-2.7-6-6-6-1.5 0-3 .6-4.1 1.6 0-3.9 3.1-7.1 7-7.1 1 0 1.9.2 2.8.6.9-2.7 3.5-4.6 6.5-4.6 3.9 0 7 3.1 7 7 0 5-4 9.1-9 9.1v11.4h-4.2z" />
              </svg>
            </div>
          </a>

          {/* Desktop navigatsiya */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative py-2 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-[#339933] ${
                    isActive
                      ? "text-[#339933]"
                      : "text-[#282828] hover:text-[#339933]"
                  }`}
                >
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                    {link.label}
                  </span>
                  {/* Animatsiyali chiziq */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-[#339933] transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full group-focus-visible:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* O'ng tomon: savat + burger */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Shopping Cart, ${cartCount} items`}
              className="group relative p-2.5 rounded-full text-[#282828] hover:text-[#339933] hover:bg-[#339933]/10 active:scale-90 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339933]/50"
            >
              <svg
                className="w-7 h-7 fill-none stroke-current transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                viewBox="0 0 28 28"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5.5 8.5L4 23.5C4 24.6 4.9 25.5 6 25.5H22C23.1 25.5 24 24.6 24 23.5L22.5 8.5H5.5Z" />
                <path
                  className="origin-bottom transition-transform duration-300 group-hover:-translate-y-0.5"
                  d="M9.5 11.5V7C9.5 4.5 11.5 2.5 14 2.5C16.5 2.5 18.5 4.5 18.5 7V11.5"
                />
              </svg>

              {cartCount > 0 && (
                <span
                  className="absolute top-0.5 right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-[#339933] text-white text-[11px] font-semibold flex items-center justify-center ring-2 ring-white"
                  style={bump ? { animation: "hdr-pop .45s ease-out" } : undefined}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Burger tugma (mobil) */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative w-11 h-11 rounded-full hover:bg-[#339933]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339933]/50"
            >
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-6 -ml-3 bg-[#282828] rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-[7px]"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-6 -ml-3 bg-[#282828] rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 h-[2px] w-6 -ml-3 bg-[#282828] rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-[7px]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobil menyu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-white ${
            menuOpen ? "max-h-[420px] opacity-100 border-t border-[#EAEAEA]" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link, i) => {
              const isActive = activePath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3.5 text-[16px] font-medium border-b border-[#F1F1F1] last:border-b-0 transition-all duration-200 hover:pl-2 hover:text-[#339933] ${
                    isActive ? "text-[#339933]" : "text-[#282828]"
                  }`}
                  style={
                    menuOpen
                      ? { animation: `hdr-link-in .4s ease-out ${i * 70}ms both` }
                      : undefined
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}