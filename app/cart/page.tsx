"use client";

import { useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DesktopTopActions from "@/components/DesktopTopActions";
import {
  Menu,
  ShoppingBag,
  Search,
  ShoppingCart,
  User,
  Store,
  Minus,
  Plus,
  X,
  ArrowRight,
  Trash2,
  Shield,
} from "lucide-react";

type CartItem = {
  id: number;
  title: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
};

const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "Minimalist chiroq",
    variant: "Yoritish tizimlari",
    price: 850000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    quantity: 1,
  },
  {
    id: 2,
    title: "Jurnalniy stolik",
    variant: "Travertin / Yog‘och",
    price: 1250000,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop&q=80",
    quantity: 1,
  },
  {
    id: 3,
    title: "Velvet kreslo",
    variant: "Yumshoq mebel",
    price: 2490000,
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop&q=80",
    quantity: 1,
  },
];

function formatPrice(price: number) {
  return `${price.toLocaleString("ru-RU")} UZS`;
}

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
    { label: "SHOP", icon: Store, active: false },
    { label: "SEARCH", icon: Search, active: false },
    { label: "CART", icon: ShoppingCart, active: true },
    { label: "PROFILE", icon: User, active: false },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-[32px] border border-[#e7e2d8] bg-[#f6f3eb]/95 px-3 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
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
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (type === "dec") {
          return { ...item, quantity: Math.max(1, item.quantity - 1) };
        }

        return { ...item, quantity: item.quantity + 1 };
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const deliveryFee = cartItems.length > 0 ? 0 : 0;
  const total = subtotal + deliveryFee;

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#faf9f4] pb-[60px] md:pb-0">
        <MobileTopBar />

        <div className="relative mx-auto w-full max-w-[1600px] pt-20 md:pt-5">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <DesktopTopActions />

          <section className="px-4 pb-10 pt-6 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <header className="mb-8 md:mb-12">
                <h1 className="text-3xl font-bold text-[#203b28] md:text-5xl">
                  Your Cart
                </h1>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#7a6a49] md:text-sm">
                  {cartItems.length} Items Curated
                </p>
              </header>

              {cartItems.length === 0 ? (
                <div className="rounded-[28px] border border-[#ded9cf] bg-white p-8 text-center md:p-14">
                  <h2 className="text-2xl font-semibold text-[#203b28]">
                    Savat hozircha bo‘sh
                  </h2>
                  <p className="mt-3 text-[#6b7280]">
                    Mahsulot qo‘shganingizdan keyin shu yerda ko‘rinadi.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                  <div className="space-y-5 lg:col-span-8">
                    {cartItems.map((item) => (
                      <article
                        key={item.id}
                        className="group rounded-[22px] border border-[#e8e3d8] bg-white p-4 shadow-[0_4px_24px_rgba(33,52,38,0.04)] md:flex md:items-center md:gap-8 md:p-6"
                      >
                        <div className="mb-4 h-24 w-24 overflow-hidden rounded-[18px] bg-[#f3efe6] md:mb-0 md:h-40 md:w-40 md:flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between md:min-h-[160px]">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold leading-tight text-[#203b28] md:text-2xl">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#7a6a49] md:text-xs">
                                {item.variant}
                              </p>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="hidden text-[#7b746b] transition hover:text-red-500 md:block"
                            >
                              <Trash2 size={18} />
                            </button>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[#7b746b] transition hover:text-red-500 md:hidden"
                            >
                              <X size={18} />
                            </button>
                          </div>

                          <div className="mt-5 flex items-end justify-between gap-4">
                            <div className="flex items-center rounded-full bg-[#f3efe6] px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, "dec")}
                                className="flex h-8 w-8 items-center justify-center text-[#6c6a63] transition hover:text-[#203b28]"
                              >
                                <Minus size={16} />
                              </button>

                              <span className="w-8 text-center text-sm font-bold text-[#203b28] md:px-4">
                                {String(item.quantity).padStart(2, "0")}
                              </span>

                              <button
                                onClick={() => updateQuantity(item.id, "inc")}
                                className="flex h-8 w-8 items-center justify-center text-[#6c6a63] transition hover:text-[#203b28]"
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <div className="text-right">
                              <p className="text-lg font-semibold text-[#203b28] md:text-xl">
                                {formatPrice(item.price * item.quantity)}
                              </p>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="mt-2 hidden items-center gap-2 text-sm font-semibold text-[#7b746b] transition hover:text-red-500 md:inline-flex"
                              >
                                <Trash2 size={16} />
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <aside className="lg:col-span-4 lg:sticky lg:top-32">
                    <div className="rounded-[24px] border border-[#e8e3d8] bg-[#f3efe6] p-6 md:p-8">
                      <h2 className="mb-8 text-3xl font-semibold text-[#203b28]">
                        Order Summary
                      </h2>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#6c6a63]">Subtotal</span>
                          <span className="text-lg font-medium text-[#203b28]">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-[#6c6a63]">Delivery Fee</span>
                          <span className="text-lg font-medium text-[#203b28]">
                            {deliveryFee === 0
                              ? "Free"
                              : formatPrice(deliveryFee)}
                          </span>
                        </div>
                      </div>

                      <div className="mb-8 mt-6 border-t border-[#d7d0c3] pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold text-[#203b28]">
                            Total
                          </span>
                          <span className="text-3xl font-bold text-[#203b28]">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>

                      <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#203b28] py-4 text-lg font-bold text-white transition hover:opacity-95 active:scale-[0.99]">
                        Proceed to Checkout
                        <ArrowRight size={18} />
                      </button>

                      <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#7b746b]">
                        <Shield size={14} />
                        Secure Encrypted Checkout
                      </p>
                    </div>

                    <div className="mt-6 rounded-[22px] bg-[#f6ecd3]/50 p-6">
                      <p className="text-lg italic text-[#7a5e2f]">
                        Heritage Guarantee
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#5f5b53]">
                        Har bir mahsulot jo‘natishdan oldin tekshiriladi. 30 kun
                        ichida qaytarish mumkin.
                      </p>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <MobileBottomNav />
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}