"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const categories = [
  { id: 1, title: "Fertilizer", image: "/img (1).png" },
  { id: 2, title: "Protective products and septic tanks", image: "/img (2).png" },
  { id: 3, title: "Planting material", image: "/img (3).png" },
  { id: 4, title: "Tools and equipment", image: "/img (4).png" },
];

const sales = [
  { id: 1, title: "Decorative forged bridge", price: 500, oldPrice: 1000, discount: "-50%", image: "/img (5).png" },
  { id: 2, title: "Flower basket", price: 100, oldPrice: 150, discount: "-34%", image: "/img (6).png" },
  { id: 3, title: "Aquarium lock", price: 150, oldPrice: 200, discount: "-25%", image: "/img (7).png" },
  { id: 4, title: "Secateurs", price: 199, oldPrice: 240, discount: "-17%", image: "/img (8).png" },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({ title, href, label }) {
  return (
    <Reveal className="flex items-center gap-6 mb-10">
      <h2 className="text-4xl md:text-[44px] font-bold tracking-tight text-[#282828] whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[#DDDDDD]" />
      <Link
        href={href}
        className="text-sm text-[#8B8B8B] border border-[#DDDDDD] px-4 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-300 hover:text-white hover:bg-[#339933] hover:border-[#339933]"
      >
        {label}
      </Link>
    </Reveal>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setSent(true);
    setFormData({ name: "", phone: "", email: "" });
    setTimeout(() => setSent(false), 3000);
  };

  const scrollToSales = (e) => {
    e.preventDefault();
    document.getElementById("sales")?.scrollIntoView({ behavior: "smooth" });
  };

  const inputClass =
    "w-full bg-transparent border border-white/70 rounded-md px-4 py-3.5 text-base text-white placeholder-white outline-none transition-all duration-300 focus:border-white focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.15)]";

  return (
    <main className="min-h-screen bg-white text-[#282828] font-sans antialiased overflow-x-hidden selection:bg-[#339933] selection:text-white">
      <section
        id="main"
        className="relative w-full h-[560px] lg:h-[640px] bg-[#34403B] overflow-hidden"
      >
        <img
          src="/img (1).jpg"
          alt="Garden background"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out ${
            mounted ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

        <div className="relative max-w-[1360px] mx-auto h-full px-6 lg:px-10 flex flex-col justify-center items-start text-white">
          <h1
            className={`text-4xl sm:text-6xl lg:text-[72px] font-extrabold max-w-4xl leading-[1.1] tracking-tight mb-10 transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Amazing Discounts <br /> on Garden Products!
          </h1>

          <a
            href="#sales"
            onClick={scrollToSales}
            className={`inline-block bg-[#339933] text-white text-base font-semibold px-10 py-3.5 rounded-md shadow-lg transition-all duration-500 hover:bg-[#2b8a2b] hover:-translate-y-1 hover:shadow-xl active:translate-y-0 ${
              mounted ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
            }`}
          >
            Check out
          </a>
        </div>
      </section>

      <section
        id="categories"
        className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-20 pb-12"
      >
        <SectionHeader title="Categories" href="/categories" label="All categories" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 100} className="h-full">
              <Link
                href={`/categories/${cat.id}`}
                className="flex flex-col items-center group"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:shadow-[0_12px_28px_rgba(51,153,51,0.25)] group-hover:-translate-y-1.5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-base font-medium text-center text-[#282828] transition-colors duration-300 group-hover:text-[#339933] line-clamp-2 px-2">
                  {cat.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-6 lg:px-10 py-10">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#2e9a2e] via-[#339933] to-[#267a26] px-8 pt-12 md:px-14 md:pt-14 overflow-hidden text-white shadow-xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-black/10 blur-3xl" />

            <h2 className="relative text-center text-3xl md:text-5xl font-extrabold tracking-tight mb-10">
              5% off on the first order
            </h2>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
              <div className="h-64 md:h-[340px] flex items-end justify-center">
                <img
                  src="/image.png"
                  alt="Gardening hands and tools"
                  className="max-h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md mx-auto w-full pb-12"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className={inputClass}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={inputClass}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#282828] font-semibold text-base py-3.5 rounded-md mt-1 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-gray-50 active:translate-y-0"
                >
                  {sent ? "Thank you! ✓" : "Get a discount"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        id="sales"
        className="max-w-[1360px] mx-auto px-6 lg:px-10 pt-16 pb-20"
      >
        <SectionHeader title="Sale" href="/allsales" label="All sales" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {sales.map((item, i) => (
            <Reveal key={item.id} delay={i * 100} className="h-full">
              <Link
                href="/allsales"
                className="group flex flex-col h-full bg-white border border-[#EAEAEA] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] hover:border-[#339933]/40"
              >
                <div className="relative aspect-square w-full bg-white overflow-hidden">
                  <span className="absolute top-3 right-3 bg-[#339933] text-white text-xs font-bold px-2.5 py-1 rounded-md z-10 shadow-sm">
                    {item.discount}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 flex flex-col border-t border-[#F0F0F0]">
                  <h3 className="text-sm text-[#282828] truncate mb-3 transition-colors duration-300 group-hover:text-[#339933]">
                    {item.title}
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold tracking-tight text-[#282828]">
                      ${item.price}
                    </span>
                    <span className="text-sm text-[#8B8B8B] line-through">
                      ${item.oldPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}