"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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
import {
  getCartItems,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  type CartItem,
} from "@/lib/cart";
import { createOrder } from "@/lib/api/sofmebelApi";

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

      <Link href="/cart" className="text-[#203b28]">
        <ShoppingBag size={22} />
      </Link>
    </header>
  );
}

function MobileBottomNav() {
  const items = [
    { label: "Do‘kon", icon: Store, active: false, href: "/online-magazine" },
    { label: "Qidiruv", icon: Search, active: false, href: "/online-magazine" },
    { label: "Savat", icon: ShoppingCart, active: true, href: "/cart" },
    { label: "Profil", icon: User, active: false, href: "/online-magazine" },
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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const refreshCart = () => {
    setCartItems(getCartItems());
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const updateQuantity = (id: number, type: "inc" | "dec") => {
    const targetItem = cartItems.find((item) => item.id === id);
    if (!targetItem) return;

    if (type === "dec") {
      const nextQuantity = Math.max(1, targetItem.quantity - 1);
      updateCartItemQuantity(id, nextQuantity);
    } else {
      updateCartItemQuantity(id, targetItem.quantity + 1);
    }

    refreshCart();
  };

  const removeItem = (id: number) => {
    removeFromCart(id);
    refreshCart();
  };

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  const deliveryFee = cartItems.length > 0 ? 0 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      setErrorMessage("Savat bo‘sh.");
      setSuccessMessage("");
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage("Ism-familyani kiriting.");
      setSuccessMessage("");
      return;
    }

    if (!phone.trim()) {
      setErrorMessage("Telefon raqamini kiriting.");
      setSuccessMessage("");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setSuccessMessage("");

      await createOrder({
        full_name: fullName.trim(),
        phone: phone.trim(),
        message: message.trim(),
        items: cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
      });

      clearCart();
      refreshCart();
      setFullName("");
      setPhone("");
      setMessage("");
      setSuccessMessage("Buyurtma muvaffaqiyatli yuborildi.");
    } catch (error) {
      console.error(error);
      setErrorMessage("Buyurtmani yuborib bo‘lmadi.");
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
      console.log()
    }
  };

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
                  Savat
                </h1>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#7a6a49] md:text-sm">
                  {cartItems.length} ta mahsulot
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

                  {successMessage && (
                    <p className="mt-4 text-sm font-medium text-green-700">
                      {successMessage}
                    </p>
                  )}

                  <Link
                    href="/online-magazine"
                    className="mt-6 inline-flex rounded-full bg-[#203b28] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Magazin ga qaytish
                  </Link>
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
                            alt={item.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col justify-between md:min-h-[160px]">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold leading-tight text-[#203b28] md:text-2xl">
                                {item.name}
                              </h3>
                              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#7a6a49] md:text-xs">
                                {item.slug}
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
                                {formatPrice(Number(item.price) * item.quantity)}
                              </p>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="mt-2 hidden items-center gap-2 text-sm font-semibold text-[#7b746b] transition hover:text-red-500 md:inline-flex"
                              >
                                <Trash2 size={16} />
                                O‘chirish
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
                        Buyurtma Tafsiloti
                      </h2>

                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Ism Familiya"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full rounded-2xl border border-[#d7d0c3] bg-white px-4 py-3 outline-none placeholder:text-[#8b867e] focus:border-[#203b28]"
                        />

                        <input
                          type="text"
                          placeholder="Telefon raqami"
                          value={phone}
                          onChange={(e) => {
                          let value = e.target.value;
                          if (!value.startsWith("+998")) {
                            value = "+998" + value.replace(/^\+?998?/, "");
                          }
                          value = value.replace(/[^\d+]/g, "");
                          if (!value.startsWith("+998")) {
                            value = "+998";
                          }
                          if (value.length > 13) {
                            value = value.slice(0, 13);
                          }
                          setPhone(value);
                        }}
                          className="w-full rounded-2xl border border-[#d7d0c3] bg-white px-4 py-3 outline-none placeholder:text-[#8b867e] focus:border-[#203b28]"
                        />

                        <textarea
                          placeholder="Xabar"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          className="w-full resize-none rounded-2xl border border-[#d7d0c3] bg-white px-4 py-3 outline-none placeholder:text-[#8b867e] focus:border-[#203b28]"
                        />

                        <div className="flex items-center justify-between">
                          <span className="text-[#6c6a63]">Jami</span>
                          <span className="text-lg font-medium text-[#203b28]">
                            {formatPrice(subtotal)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-[#6c6a63]">Yetkazib berish</span>
                          <span className="text-lg font-medium text-[#203b28]">
                            {deliveryFee === 0
                              ? "Bepul"
                              : formatPrice(deliveryFee)}
                          </span>
                        </div>
                      </div>

                      <div className="mb-8 mt-6 border-t border-[#d7d0c3] pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold text-[#203b28]">
                            Umumiy
                          </span>
                          <span className="text-3xl font-bold text-[#203b28]">
                            {formatPrice(total)}
                          </span>
                        </div>
                      </div>

                      {errorMessage && (
                        <p className="mb-4 text-sm font-medium text-red-600">
                          {errorMessage}
                        </p>
                      )}

                      {successMessage && (
                        <p className="mb-4 text-sm font-medium text-green-700">
                          {successMessage}
                        </p>
                      )}

                      <button
                        onClick={handleCheckout}
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#203b28] py-4 text-lg font-bold text-white transition hover:opacity-95 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Yuborilmoqda..." : "To‘lovga o‘tish"}
                        <ArrowRight size={18} />
                      </button>

                      <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#7b746b]">
                        <Shield size={14} />
                        Xavfsiz shifrlangan to‘lov
                      </p>
                    </div>

                    <div className="mt-6 rounded-[22px] bg-[#f6ecd3]/50 p-6">
                      <p className="text-lg italic text-[#7a5e2f]">
                        Kafolat
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