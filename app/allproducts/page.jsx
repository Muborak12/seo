
import Link from "next/link";

export const metadata = {
  title: "All Products | Tools and Equipment",
  description:
    "Explore garden tools and equipment at great prices. Filter products by price, find discounted items, and sort products easily.",
  keywords: [
    "tools and equipment",
    "garden tools",
    "gardening equipment",
    "discounted products",
    "online store",
  ],
  openGraph: {
    title: "All Products | Tools and Equipment",
    description:
      "Explore garden tools and equipment at great prices.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const products = [
  {
    id: 1,
    title: "Secateurs",
    price: 199,
    oldPrice: 240,
    discount: "-17%",
    image: "/img (9).png",
    hasGreenButton: false,
  },
  {
    id: 2,
    title: "Collection for berries (p...)",
    price: 26,
    oldPrice: 35,
    discount: "-26%",
    image: "/img (10).png",
    hasGreenButton: false,
  },
  {
    id: 3,
    title: "Gloves (black)",
    price: 9,
    oldPrice: 14,
    discount: "-36%",
    image: "/img (11).png",
    hasGreenButton: false,
  },
  {
    id: 4,
    title: "Sickle-shaped hacksaw",
    price: 155,
    oldPrice: null,
    discount: null,
    image: "/img (12).png",
    hasGreenButton: false,
  },
  {
    id: 5,
    title: "Bayonet shovel",
    price: 180,
    oldPrice: null,
    discount: null,
    image: "/img (13).png",
    hasGreenButton: false,
  },
  {
    id: 6,
    title: "Garden pitchfork",
    price: 179,
    oldPrice: null,
    discount: null,
    image: "/img (14).png",
    hasGreenButton: false,
  },
  {
    id: 7,
    title: "Barbell",
    price: 12,
    oldPrice: null,
    discount: null,
    image: "/img (15).png",
    hasGreenButton: false,
  },
  {
    id: 8,
    title: "Souvenir thermometer",
    price: 98,
    oldPrice: 120,
    discount: "-18%",
    image: "/img (16).png",
    hasGreenButton: false,
  },
];

export default async function AllProducts({ searchParams }) {
  const params = await searchParams;

  const minPrice = params?.minPrice ?? "";
  const maxPrice = params?.maxPrice ?? "";
  const onlyDiscounted = params?.discount === "true";
  const sort = params?.sort ?? "default";

  const validMin =
    minPrice !== "" && Number.isFinite(Number(minPrice))
      ? Math.max(0, Number(minPrice))
      : null;

  const validMax =
    maxPrice !== "" && Number.isFinite(Number(maxPrice))
      ? Math.max(0, Number(maxPrice))
      : null;

  let visible = products.filter((product) => {
    if (validMin !== null && product.price < validMin) {
      return false;
    }

    if (validMax !== null && product.price > validMax) {
      return false;
    }

    if (onlyDiscounted && !product.discount) {
      return false;
    }

    return true;
  });

  if (sort === "price-asc") {
    visible = [...visible].sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    visible = [...visible].sort((a, b) => b.price - a.price);
  }

  if (sort === "newest") {
    visible = [...visible].sort((a, b) => b.id - a.id);
  }

  return (
    <main className="ap-anim w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 py-10 font-sans text-[#282828] bg-white">
      <style>{`
        @keyframes ap-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ap-fade-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ap-line {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes ap-badge {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-20deg);
          }
          70% {
            transform: scale(1.2) rotate(4deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ap-anim,
          .ap-anim * {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <h1
        className="text-4xl sm:text-5xl font-extrabold tracking-tight opacity-0"
        style={{ animation: "ap-fade-left .6s ease-out forwards" }}
      >
        Tools and equipment
      </h1>

      <div
        className="mt-3 mb-8 h-[3px] w-24 rounded-full bg-[#339933] origin-left"
        style={{
          animation: "ap-line .8s .2s cubic-bezier(.22,1,.36,1) both",
        }}
      />

      <form
        action="/allproducts"
        method="GET"
        className="flex flex-wrap items-end gap-y-4 gap-x-8 text-base font-semibold mb-10 opacity-0"
        style={{ animation: "ap-rise .6s .15s ease-out forwards" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">Price</span>

          <input
            type="number"
            min="0"
            name="minPrice"
            placeholder="from"
            defaultValue={minPrice}
            className="w-24 h-10 px-3.5 border border-[#ddd] rounded-md text-sm font-medium outline-none hover:border-[#bbb] focus:border-[#339933] focus:ring-4 focus:ring-[#339933]/15 transition-all duration-200"
          />

          <input
            type="number"
            min="0"
            name="maxPrice"
            placeholder="to"
            defaultValue={maxPrice}
            className="w-24 h-10 px-3.5 border border-[#ddd] rounded-md text-sm font-medium outline-none hover:border-[#bbb] focus:border-[#339933] focus:ring-4 focus:ring-[#339933]/15 transition-all duration-200"
          />
        </div>

        <label className="group flex items-center gap-3 cursor-pointer select-none">
          <span className="text-base font-semibold group-hover:text-[#339933] transition-colors">
            Discounted items
          </span>

          <input
            type="checkbox"
            name="discount"
            value="true"
            defaultChecked={onlyDiscounted}
            className="w-7 h-7 rounded border-2 border-[#ddd] accent-[#339933] cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90"
          />
        </label>

        <div className="flex items-center gap-3">
          <span className="text-base font-semibold">Sorted</span>

          <div className="relative">
            <select
              name="sort"
              defaultValue={sort}
              className="h-10 pl-3.5 pr-8 border border-[#ddd] rounded-md text-sm font-medium bg-white cursor-pointer outline-none hover:border-[#bbb] focus:border-[#339933] focus:ring-4 focus:ring-[#339933]/15 transition-all duration-200"
            >
              <option value="default">by default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="h-10 px-5 rounded-md bg-[#339933] text-white text-sm font-semibold hover:bg-[#2c842c] active:scale-95 transition"
        >
          Apply filters
        </button>

        <Link
          href="/allproducts"
          className="h-10 flex items-center px-4 rounded-md border border-[#ddd] text-sm font-semibold hover:border-[#339933] hover:text-[#339933] transition"
        >
          Reset
        </Link>
      </form>

      {visible.length === 0 ? (
        <div
          className="py-20 text-center text-gray-400 text-lg font-medium opacity-0"
          style={{ animation: "ap-rise .5s ease-out forwards" }}
        >
          No products match these filters
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visible.map((product, i) => (
            <Link
              href={`/allproducts/${product.id}`}
              key={product.id}
              className="group flex flex-col border border-[#e5e5e5] rounded-xl overflow-hidden bg-white opacity-0 hover:-translate-y-2 hover:border-[#339933]/40 hover:shadow-[0_20px_36px_-18px_rgba(51,153,51,0.45)] transition-[transform,box-shadow,border-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#339933]"
              style={{
                animation: `ap-rise .6s ${
                  0.3 + Math.min(i, 7) * 0.08
                }s cubic-bezier(.22,1,.36,1) forwards`,
              }}
            >
              <div className="relative w-full h-64 bg-white p-6 flex items-center justify-center border-b border-[#f0f0f0] overflow-hidden">
                {product.discount && (
                  <span
                    className="absolute top-4 right-4 z-10 bg-[#339933] text-white text-xs font-bold px-2 py-1 rounded opacity-0"
                    style={{
                      animation: `ap-badge .5s ${
                        0.6 + Math.min(i, 7) * 0.08
                      }s ease-out forwards`,
                    }}
                  >
                    {product.discount}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
                />

                {product.hasGreenButton && (
                  <div className="absolute inset-x-4 bottom-4 translate-y-[140%] group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <span className="block w-full py-2.5 rounded-lg text-center text-sm font-semibold tracking-wide bg-[#339933] text-white hover:bg-[#2c842c] transition">
                      Add to cart
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <h2
                  className="text-base font-medium text-gray-800 group-hover:text-[#339933] truncate mb-3 transition-colors duration-300"
                  title={product.title}
                >
                  {product.title}
                </h2>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold tracking-tight text-black transition-transform duration-300 origin-left group-hover:scale-105">
                    ${product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm font-semibold text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
