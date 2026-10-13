   'use cache'
import Link from "next/link";
import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { cacheLife } from "next/cache";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const tints = [
  "from-[#3D3BF3] to-[#9B99FF]",
  "from-[#FF7A59] to-[#FFC9B3]",
  "from-[#0F9D8A] to-[#93E6D6]",
  "from-[#14142B] to-[#55558A]",
  "from-[#C13584] to-[#F7A8D2]",
];

function cellClass(i, n) {
  const hasBig = n >= 5;
  const mdWide = i === n - 1 && n > 1 && (n - 1) % 2 === 1;
  const lgWide = hasBig && i === n - 1 && (n - 5) % 4 === 1;
  return [
    i === 0 && hasBig ? "md:col-span-2 lg:row-span-2" : "",
    mdWide ? "md:col-span-2" : "",
    mdWide && !lgWide ? "lg:col-span-1" : "",
    lgWide ? "lg:col-span-4" : "",
  ].join(" ");
}

export default async function AllCategories() {
  let categories = [];

  cacheLife('hours')
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=5", {
      cache: "force-cache",
    });
    if (res.ok) {
      categories = await res.json();
    }
  } catch (error) {
    console.error(error);
  }

  const total = categories.length;

  return (
    <main
      className={`${font.className} min-h-screen bg-[#EEF0F7] px-5 py-12 text-[#14142B] sm:px-8 lg:px-12`}
    >
      <style>{`
        @keyframes cat-reveal {
          from { clip-path: inset(100% 0 0 0); transform: translateY(24px); }
          to   { clip-path: inset(0 0 0 0);    transform: translateY(0); }
        }
        @keyframes cat-title {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cat-card  { animation: cat-reveal .9s cubic-bezier(.2,.8,.2,1) backwards; }
        .cat-title { animation: cat-title .7s ease-out backwards; }
        @media (prefers-reduced-motion: reduce) {
          .cat-card, .cat-title { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <header className="cat-title mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Kerakli kategoriyani toping
            </h1>
            <p className="mt-4 max-w-md text-base text-[#14142B]/60">
              Barcha mahsulot bo&apos;limlari bir joyda. Birini tanlang va ichiga kiring.
            </p>
          </div>

          {total > 0 && (
            <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-[#14142B]/10">
              {total} ta kategoriya
            </span>
          )}
        </header>

        {total === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center ring-1 ring-[#14142B]/10">
            <p className="text-lg font-semibold">Kategoriyalar yuklanmadi</p>
            <p className="mt-2 text-[#14142B]/60">
              Internetni tekshirib, sahifani yangilang.
            </p>
          </div>
        ) : (
          <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[250px]">
            {categories.map((category, i) => {
              const isBig = i === 0 && total >= 5;
              return (
                <Link
                  key={category.id}
                  href={`/allcategories/${category.id}`}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className={`cat-card group relative isolate overflow-hidden bg-gradient-to-br ${
                    tints[i % tints.length]
                  } ${
                    isBig ? "rounded-[2.5rem]" : "rounded-3xl"
                  } outline-none transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#3D3BF3]/25 focus-visible:ring-4 focus-visible:ring-[#3D3BF3] ${cellClass(
                    i,
                    total
                  )}`}
                >
                  {category.image && (
                    <img
                      src={category.image}
                      alt={category.name}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B0B1E]/85 via-[#0B0B1E]/20 to-transparent transition-opacity duration-500 group-hover:from-[#0B0B1E]/95" />

                  <div className="flex h-full flex-col justify-end p-6 sm:p-7">
                    <span className="mb-3 w-fit rounded-full bg-white/15 px-3 py-1 text-sm text-white/90 backdrop-blur-md ring-1 ring-white/20">
                      Bo&apos;lim #{category.id}
                    </span>

                    <h2
                      className={`font-extrabold leading-tight tracking-tight text-white ${
                        isBig ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl"
                      }`}
                    >
                      {category.name}
                    </h2>
                  </div>

                  <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#14142B] opacity-100 shadow-lg transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}