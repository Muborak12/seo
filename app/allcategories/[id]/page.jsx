import React from "react";
import Link from "next/link";

async function getCategory(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);

  return res.json();
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function AllCategoriesSingle({ params }) {
  const { id } = await params;

  const category = await getCategory(id);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-4 py-10 md:px-8">
      {/* Animatsiyalar shu yerning o'zida */}
      <style>{`
        @keyframes cat-fade-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes cat-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes cat-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes cat-shine {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(450%) skewX(-20deg); }
        }
        .cat-fade-up { animation: cat-fade-up 0.8s ease-out both; }
        .cat-fade-in { animation: cat-fade-in 1s ease-out both; }
        .cat-float { animation: cat-float 7s ease-in-out infinite; }
        .cat-group:hover .cat-shine { animation: cat-shine 1.1s ease-in-out; }
      `}</style>

      {/* Fon bezaklari */}
      <div className="cat-float pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />
      <div
        className="cat-float pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Orqaga */}
        <Link
          href="/categories"
          className="cat-fade-in group mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Barcha kategoriyalar
        </Link>

        <div className="cat-fade-up grid overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-2xl shadow-indigo-200/40 backdrop-blur-xl md:grid-cols-2">
          {/* Image */}
          <div className="relative p-6 md:p-8">
            <div className="cat-group group relative h-[300px] overflow-hidden rounded-3xl md:h-[520px]">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />

              {/* Gradient qatlam */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

              {/* Yaltirash effekti */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="cat-shine absolute top-0 h-full w-1/5 -translate-x-full bg-white/30" />
              </div>

              {/* ID badge */}
              <span className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-800 shadow backdrop-blur">
                #{category.id}
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span
              className="cat-fade-up inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
              style={{ animationDelay: "150ms" }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
              Category
            </span>

            <h1
              className="cat-fade-up mt-5 bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl"
              style={{ animationDelay: "250ms" }}
            >
              {category.name}
            </h1>

            <p
              className="cat-fade-up mt-4 text-gray-500"
              style={{ animationDelay: "350ms" }}
            >
              Slug:{" "}
              <span className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-sm text-gray-700">
                {category.slug}
              </span>
            </p>

            <div className="my-8 h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-transparent" />

            {/* Info kartochkalari */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div
                className="cat-fade-up rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: "450ms" }}
              >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  ID
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {category.id}
                </p>
              </div>

              <div
                className="cat-fade-up rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: "520ms" }}
              >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Created
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {formatDate(category.creationAt)}
                </p>
              </div>

              <div
                className="cat-fade-up rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2"
                style={{ animationDelay: "590ms" }}
              >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Updated
                </p>
                <p className="mt-1 font-semibold text-gray-800">
                  {formatDate(category.updatedAt)}
                </p>
              </div>
            </div>

            {/* Tugma */}
            <button
              className="cat-fade-up group relative mt-10 w-fit overflow-hidden rounded-2xl bg-gray-900 px-8 py-4 font-medium text-white shadow-xl shadow-gray-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              style={{ animationDelay: "680ms" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Explore Category
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
