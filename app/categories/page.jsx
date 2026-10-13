"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const categories = [
  { id: 1, title: "Fertilizer", image: "/img (1).png" },
  { id: 2, title: "Protective products and septic tanks", image: "/img (2).png" },
  { id: 3, title: "Planting material", image: "/img (3).png" },
  { id: 4, title: "Tools and equipment", image: "/img (4).png" },
];

// Element ekranga kirganda bir marta true bo'ladi
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Categories() {
  const [ref, inView] = useInView();

  return (
    <section
      id="categories"
      ref={ref}
      className="cat-anim max-w-[1360px] mx-auto px-6 lg:px-10 pt-20 pb-12"
    >
      <style>{`
        @keyframes cat-rise {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cat-fade-left {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes cat-line {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cat-anim, .cat-anim * { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* Sarlavha qatori */}
      <div className="flex items-center gap-6 mb-10">
        <h2
          className="text-4xl font-bold tracking-tight text-[#282828] whitespace-nowrap opacity-0"
          style={inView ? { animation: "cat-fade-left .6s ease-out forwards" } : undefined}
        >
          Categories
        </h2>

        <div className="flex-1 h-[1px] bg-[#DDDDDD] origin-left scale-x-0"
          style={inView ? { animation: "cat-line .9s .2s cubic-bezier(.22,1,.36,1) forwards" } : undefined}
        />

        <Link
          href="/categories"
          className="group relative overflow-hidden text-xs text-[#8B8B8B] hover:text-white border border-[#DDDDDD] hover:border-[#339933] px-4 py-2 rounded-md font-medium whitespace-nowrap transition-colors duration-300 opacity-0"
          style={inView ? { animation: "cat-fade-left .6s .3s ease-out forwards" } : undefined}
        >
          <span className="absolute inset-0 bg-[#339933] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          <span className="relative">All categories</span>
        </Link>
      </div>

      {/* Kartalar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="group flex flex-col items-center cursor-pointer opacity-0 focus-visible:outline-none"
            style={
              inView
                ? { animation: `cat-rise .7s ${0.25 + i * 0.12}s cubic-bezier(.22,1,.36,1) forwards` }
                : undefined
            }
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_18px_36px_-14px_rgba(51,153,51,0.45)] group-focus-visible:ring-2 group-focus-visible:ring-[#339933]">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Yashil gradient qoplama */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#339933]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Yaltirash (shine) effekti */}
              <div className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/30 skew-x-[-20deg] -translate-x-full group-hover:translate-x-[450%] transition-transform duration-1000 ease-out" />

              {/* Strelka tugma */}
              <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-[#339933] flex items-center justify-center shadow-md translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
              </span>
            </div>

            <p className="relative text-base font-medium text-center text-[#282828] group-hover:text-[#339933] transition-colors duration-300 line-clamp-2 px-2 pb-1">
              {cat.title}
              <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#339933] transition-all duration-300 group-hover:w-1/2" />
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}