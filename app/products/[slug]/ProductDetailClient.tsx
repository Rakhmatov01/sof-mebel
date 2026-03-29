"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import type { ProductModel } from "@/lib/types/api";
import { addToCart } from "@/lib/cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Props = {
  product: ProductModel;
};

type TabKey = "description" | "specifications";

export default function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [liked, setLiked] = useState(false);

  const totalPrice = useMemo(() => {
    return (Number(product.price) * quantity).toLocaleString();
  }, [product.price, quantity]);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const getImageUrl = (images?: string) => {
    if (!images) return "/placeholder.png";
    const firstImage = images[0]?.trim();
    if (!firstImage) return "/placeholder.png";

    if (
      firstImage.startsWith("http://") ||
      firstImage.startsWith("https://")
    ) {
      return firstImage;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    return `${baseUrl}${firstImage}`;
  };

  const imageUrl = getImageUrl(product.images);

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: imageUrl,
      quantity,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Dynamic rating logic
  const renderStars = () => {
    const rating = product.rating || 0;
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < Math.floor(rating) 
            ? "fill-goldAccent text-goldAccent" 
            : "text-neutral-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#1b1c19]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-16">
          {/* Product Image Section */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full overflow-hidden rounded-[24px] bg-[#efeee9] sm:rounded-[32px]">
              <div className="relative aspect-[1/1] w-full sm:aspect-[4/5]">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>

              <button
                onClick={() => setLiked((prev) => !prev)}
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5 shadow-sm backdrop-blur-md transition-all active:scale-90 hover:bg-white"
              >
                <Heart
                  size={20}
                  className={`${liked ? "fill-red-500 text-red-500" : "text-[#1b1c19]"}`}
                />
              </button>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">{renderStars()}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  {product.rating ? `${product.rating} / 5.0` : "Yangi"}
                </span>
              </div>

              <h1 className="text-2xl font-bold leading-tight text-greenDeep sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              <div className="mt-1 flex items-baseline gap-3">
                 <p className="text-xl font-bold text-goldAccent sm:text-3xl">
                  {Number(product.price).toLocaleString()} UZS
                </p>
                {/* Optional: Add old price if helpful for "Senior" feel */}
                <span className="text-sm text-neutral-400 line-through opacity-50">
                   {(Number(product.price) * 1.2).toLocaleString()} UZS
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:mt-6 sm:text-base sm:leading-loose">
              {product.description}
            </p>

            {/* Actions Grid - Optimized for Mobile */}
            <div className="mt-6 flex flex-col gap-4 sm:mt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 items-center rounded-2xl bg-neutral-100 p-1 border border-neutral-200">
                  <button
                    onClick={decrease}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-white active:bg-neutral-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-bold text-sm">{quantity}</span>
                  <button
                    onClick={increase}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-white active:bg-neutral-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-6 font-bold tracking-wide text-white transition-all active:scale-95 shadow-lg shadow-greenDeep/10 ${
                    addedToCart ? "bg-green-600" : "bg-greenDeep hover:bg-greenDeep/95"
                  }`}
                >
                  <ShoppingCart size={18} />
                  <span className="text-sm">{addedToCart ? "Qo‘shildi" : "Savatga qo‘shish"}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex h-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-sm font-bold text-greenDeep transition hover:bg-neutral-50 active:scale-95">
                  Hozir olish
                </button>
                 <div className="flex h-12 items-center justify-center rounded-2xl bg-neutral-800 px-4 text-sm font-bold text-white">
                  Jami: {totalPrice}
                </div>
              </div>
            </div>

            {/* Benefits - Compact on Mobile */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-neutral-200 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-goldAccent/10 text-goldAccent">
                  <CheckCircle size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-goldAccent/10 text-goldAccent">
                  <CheckCircle size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Kafolat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - More compact spacing */}
        <section className="mt-12 lg:mt-24">
          <div className="flex gap-8 border-b border-neutral-200">
            {(["description", "specifications"] as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? "border-b-2 border-greenDeep text-greenDeep" 
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {tab === "description" ? "Tavsif" : "Xususiyatlar"}
              </button>
            ))}
          </div>

          <div className="py-8 transition-all duration-300">
            {activeTab === "description" ? (
              <div className="max-w-3xl animate-fadeIn">
                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-8">
                  {product.description}
                </p>
              </div>
            ) : (
              <div className="max-w-2xl rounded-3xl bg-neutral-100 p-6 sm:p-8 animate-fadeIn">
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-neutral-200 pb-3">
                    <span className="text-sm text-neutral-500">Nomi</span>
                    <span className="text-sm font-bold text-greenDeep">{product.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Artikul</span>
                    <span className="text-sm font-bold text-greenDeep">#{product.id}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}