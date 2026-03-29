"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link"
import DesktopTopActions from "@/components/DesktopTopActions";
import {
  Menu,
  ShoppingBag,
  Search,
  ShoppingCart,
  User,
  Store,
} from "lucide-react";
import Pagination from "@/components/pagination";
import ContactFooter from "@/components/contact";

const products = [
  {
    id: 1,
    title: "Meyn",
    brand: "Asento",
    category: "Yotoqxona",
    price: "9 000 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Svetilnik",
    brand: "Cozy House",
    category: "Yoritish",
    price: "2 392 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Nastolnaya lampa",
    brand: "Cozy House",
    category: "Yoritish",
    price: "1 095 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Jurnalniy stolik",
    brand: "Strong",
    category: "Stollar",
    price: "7 250 000 UZS",
    oldPrice: "7 855 000 UZS",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Divan",
    brand: "Maison",
    category: "Yumshoq mebel",
    price: "12 400 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Torsher",
    brand: "Lumen",
    category: "Yoritish",
    price: "1 780 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    title: "Kreslo",
    brand: "Soft Line",
    category: "Yumshoq mebel",
    price: "4 890 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Komod",
    brand: "Wood Art",
    category: "Saqlash",
    price: "6 300 000 UZS",
    oldPrice: "6 950 000 UZS",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    title: "Dekor lampa",
    brand: "Glow Home",
    category: "Dekor",
    price: "980 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    title: "Konsol stol",
    brand: "Nordic",
    category: "Stollar",
    price: "5 750 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80",
  },
];

function MobileTopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-[#f6f3eb]/90 px-4 py-4 backdrop-blur-xl md:hidden">
      <button className="text-[#203b28]">
        <Menu size={22} />
      </button>

      <h1 className="text-xl font-bold tracking-tight text-[#203b28]">
        SafMebel
      </h1>

      <button className="text-[#203b28]">
        <ShoppingBag size={22} />
      </button>
    </header>
  );
}


function MobileBottomNav() {
  const items = [
    { label: "SHOP", icon: Store, active: true, href:"/online-magazine" },
    { label: "SEARCH", icon: Search, active: false, href:"/online-magazine" },
    { label: "CART", icon: ShoppingCart, active: false, href:"/cart" },
    { label: "PROFILE", icon: User, active: false, href:"/online-magazine" },
  ];


  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-[32px] border border-[#e7e2d8] bg-[#f6f3eb]/95 px-3 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-w-[72px] flex-col items-center justify-center rounded-full px-4 py-2 transition ${
                item.active
                  ? "bg-[#203b28] text-white"
                  : "text-[#7a6a49] hover:text-[#203b28]"
              }`}
            >
              <Icon size={20} />
              <span className="mt-1 text-[10px] font-medium tracking-[0.18em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default function OnlineMagazinePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-greenDeep pb-28 md:pb-0">
        <MobileTopBar />

        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div
            className="absolute right-0 top-0 h-[560px] w-[560px] rounded-full blur-[70px]"
            style={{
              background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-[60px]"
            style={{
              background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#C6A969 1px, transparent 1px),
                              linear-gradient(90deg, #C6A969 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1600px] md:pt-5">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <DesktopTopActions />

          <section className=" mb-8 hidden overflow-hidden rounded-[28px] px-6 py-8 md:block md:px-10 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-lg font-medium uppercase tracking-[0.18em] text-white">
                  Online Magazine
                </p>

                <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Uyingiz uchun mos mebellarni qulay tanlang
                </h1>

                <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
                  Zamonaviy, nafis va funksional mebellarni bir sahifada ko‘rib,
                  interyeringizga mos variantlarni toping.
                </p>
              </div>

              <div className="flex gap-3 text-sm text-[#7b746b]">
                <span className="rounded-full bg-white/70 px-4 py-2">Premium</span>
                <span className="rounded-full bg-white/70 px-4 py-2">Modern</span>
                <span className="rounded-full bg-white/70 px-4 py-2">Elegant</span>
              </div>
            </div>
          </section>

          <section className="mb-8 mt-2 px-4 md:mt-20 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex w-max gap-3">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;

                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? "bg-white text-[#0f172a]"
                            : "bg-white/10 text-white hover:bg-white/15"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8 mt-10">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
                Mahsulotlar
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="mb-5 break-inside-avoid rounded-[24px] bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className={`w-full overflow-hidden rounded-[22px] rounded-b h-[400px]`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover overflow-hidden"
                      />
                    </div>

                    <div className="p-4">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm text-neutral-500">{product.brand}</p>
                          <p className="text-xs text-neutral-400">{product.category}</p>
                        </div>

                        <div className="text-right">
                          {product.oldPrice && (
                            <p className="text-xs text-neutral-400 line-through">
                              {product.oldPrice}
                            </p>
                          )}
                          <p className="text-sm text-neutral-600">{product.price}</p>
                        </div>
                      </div>

                      <div className="flex items-end justify-between gap-3">
                        <h3 className="max-w-[70%] text-[20px] font-medium leading-tight text-neutral-900">
                          {product.title}
                        </h3>

                        <Link href="/product-detail" className="rounded-full bg-[#111827] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
                          O‘tish
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        <Pagination
  currentPage={1}
  totalPages={1}
  onPageChange={()=>{}}
/>
          </section>
        </div>
      </main>

      <MobileBottomNav />
      <ContactFooter />
      <Footer />
    </>
  );
}