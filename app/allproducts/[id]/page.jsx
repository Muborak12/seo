import React from "react";
import Link from "next/link";

const products = [
  { id: 1, title: "Secateurs", price: 199, oldPrice: 240, discount: "-17%", image: "/img (9).png" },
  { id: 2, title: "Collection for berries (p...", price: 26, oldPrice: 35, discount: "-26%", image: "/img (10).png" },
  { id: 3, title: "Gloves (black)", price: 9, oldPrice: 14, discount: "-36%", image: "/img (11).png" },
  { id: 4, title: "Sickle-shaped hacksaw", price: 155, oldPrice: null, discount: null, image: "/img (12).png" },
  { id: 5, title: "Bayonet shovel", price: 180, oldPrice: null, discount: null, image: "/img (13).png" },
  { id: 6, title: "Garden pitchfork", price: 179, oldPrice: null, discount: null, image: "/img (14).png" },
  { id: 7, title: "Barbell", price: 12, oldPrice: null, discount: null, image: "/img (15).png" },
  { id: 8, title: "Souvenir thermometer", price: 98, oldPrice: 120, discount: "-18%", image: "/img (16).png" },
];
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.description,
  }
}
export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#282828]">
          Product not found
        </h1>
        <Link
          href="/allproducts"
          className="px-6 py-3 rounded-full bg-[#339933] text-white font-medium hover:bg-[#2a8a2a] transition"
        >
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-10 font-sans text-[#282828] bg-white">
      <nav className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-8 font-medium">
        <Link href="/" className="hover:text-[#339933] transition-colors">
          Main page
        </Link>
        <span>—</span>
        <Link href="/allproducts" className="hover:text-[#339933] transition-colors">
          Tools and equipment
        </Link>
        <span>—</span>
        <span className="text-[#282828]">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="group lg:col-span-6 relative overflow-hidden border border-[#e5e5e5] rounded-2xl p-8 flex items-center justify-center bg-white min-h-[460px] hover:border-[#339933]/40 hover:shadow-[0_24px_48px_-24px_rgba(51,153,51,0.4)] transition-all duration-500">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#339933]/10 blur-3xl scale-75 group-hover:scale-110 transition-transform duration-700" />

          {product.discount && (
            <span className="absolute top-4 right-4 z-10 bg-[#339933] text-white text-xs font-bold px-2.5 py-1 rounded">
              {product.discount}
            </span>
          )}

          <img
            src={product.image}
            alt={product.title}
            className="relative max-h-[380px] max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="lg:col-span-6 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {product.title}
          </h1>

          <div className="mt-3 mb-6 h-[3px] w-24 rounded-full bg-[#339933]" />

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl sm:text-5xl font-extrabold">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-xl sm:text-2xl text-gray-400 font-semibold line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="h-12 px-6 border border-[#ddd] rounded-lg flex items-center justify-center text-xl font-bold text-gray-400">
              −
            </span>

            <span className="h-12 min-w-[64px] px-6 flex items-center justify-center border border-[#ddd] rounded-lg text-base font-bold">
              1
            </span>

            <span className="h-12 px-6 border border-[#ddd] rounded-lg flex items-center justify-center text-xl font-bold text-gray-400">
              +
            </span>

            <button
              type="button"
              disabled
              className="flex-1 min-w-[200px] h-12 text-white font-bold rounded-lg tracking-wide text-base bg-[#339933] opacity-90 cursor-not-allowed"
            >
              Add to cart
            </button>
          </div>

          <div className="border-t border-[#f0f0f0] pt-6">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Product description
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}