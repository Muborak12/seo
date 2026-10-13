"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const categories = [
  { id: 1, title: "Fertilizer", image: "/img (1).png" },
  { id: 2, title: "Protective products and septic tanks", image: "/img (2).png" },
  { id: 3, title: "Planting material", image: "/img (3).png" },
  { id: 4, title: "Tools and equipment", image: "/img (4).png" },
];

export default function CategoriesId() {
  const params = useParams();
  const product = categories.find((item) => item.id === Number(params.id));
  const others = categories.filter((item) => item.id !== Number(params.id));

  const styles = (
    <style>{`
      @keyframes cid-rise {
        from { opacity: 0; transform: translateY(28px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes cid-zoom {
        from { opacity: 0; transform: scale(.88) rotate(-2deg); }
        to   { opacity: 1; transform: scale(1) rotate(0); }
      }
      @keyframes cid-float {
        0%, 100% { transform: translateY(0); }
        50%      { transform: translateY(-10px); }
      }
      @keyframes cid-blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50%      { transform: translate(18px, -14px) scale(1.12); }
      }
      @keyframes cid-line {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      @media (prefers-reduced-motion: reduce) {
        .cid-anim, .cid-anim * { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
      }
    `}</style>
  );

  if (!product) {
    return (
      <main className="cid-anim min-h-screen flex flex-col items-center justify-center gap-6 bg-[#f5f8fa] px-6 text-center">
        {styles}
        <h1
          className="text-3xl font-bold text-[#172b3a] opacity-0"
          style={{ animation: "cid-rise .6s ease-out forwards" }}
        >
          Category not found
        </h1>
        <Link
          href="/categories"
          className="opacity-0 px-6 py-3 rounded-full bg-[#339933] text-white font-medium hover:bg-[#2a8a2a] active:scale-95 transition-all"
          style={{ animation: "cid-rise .6s .15s ease-out forwards" }}
        >
          Back to categories
        </Link>
      </main>
    );
  }

  return (
    <main className="cid-anim min-h-screen bg-[#f5f8fa] p-6 lg:p-10">
      {styles}

      <div className="max-w-4xl mx-auto">
        {/* Orqaga qaytish */}
        <Link
          href="/categories"
          className="group inline-flex items-center gap-2 mb-6 text-sm font-medium text-[#8B8B8B] hover:text-[#339933] transition-colors opacity-0"
          style={{ animation: "cid-rise .5s ease-out forwards" }}
        >
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4 fill-none stroke-current transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 10H4M9 5l-5 5 5 5" />
          </svg>
          All categories
        </Link>

        {/* Asosiy karta */}
        <div
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm opacity-0"
          style={{ animation: "cid-rise .7s .1s cubic-bezier(.22,1,.36,1) forwards" }}
        >
          {/* Orqa fondagi yumshoq yashil dog'lar */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#339933]/10 blur-3xl"
            style={{ animation: "cid-blob 8s ease-in-out infinite" }}
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-[#339933]/10 blur-3xl"
            style={{ animation: "cid-blob 10s ease-in-out infinite reverse" }}
          />

          <div className="relative h-96 flex items-center justify-center bg-[#f7fbfd] rounded-2xl overflow-hidden group">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-80 max-w-full object-contain opacity-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                animation:
                  "cid-zoom .8s .3s cubic-bezier(.22,1,.36,1) forwards, cid-float 5s 1.2s ease-in-out infinite",
              }}
            />
          </div>

          <h1
            className="relative mt-6 text-3xl font-black text-[#172b3a] opacity-0"
            style={{ animation: "cid-rise .6s .5s ease-out forwards" }}
          >
            {product.title}
          </h1>

          <div
            className="relative mt-3 h-[3px] w-24 rounded-full bg-[#339933] origin-left"
            style={{ animation: "cid-line .7s .7s cubic-bezier(.22,1,.36,1) both" }}
          />

          <div
            className="relative mt-6 opacity-0"
            style={{ animation: "cid-rise .6s .8s ease-out forwards" }}
          >
            <Link
              href="/allproducts"
              className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#339933] text-white font-medium shadow-[0_10px_24px_-10px_rgba(51,153,51,0.8)] hover:bg-[#2a8a2a] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              View products
              <svg
                viewBox="0 0 20 20"
                className="w-4 h-4 fill-none stroke-current transition-transform duration-300 group-hover/btn:translate-x-1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Boshqa kategoriyalar */}
        <div
          className="mt-12 opacity-0"
          style={{ animation: "cid-rise .6s 1s ease-out forwards" }}
        >
          <h2 className="mb-5 text-xl font-bold text-[#282828]">Other categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 hover:-translate-y-1 hover:border-[#339933]/40 hover:shadow-[0_14px_28px_-16px_rgba(51,153,51,0.5)] transition-all duration-300"
                style={{ animation: `cid-rise .5s ${1.1 + i * 0.1}s ease-out forwards` }}
              >
                <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-medium text-[#282828] group-hover:text-[#339933] transition-colors line-clamp-2">
                  {cat.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}