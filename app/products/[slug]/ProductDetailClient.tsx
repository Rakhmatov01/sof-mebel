"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#1b1c19]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[28px] bg-[#efeee9] sm:max-w-[480px] lg:max-w-[520px]">
              <div className="relative aspect-[4/5] w-full">
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
                className="absolute right-4 top-4 rounded-full bg-white/80 p-3 shadow-sm backdrop-blur-md transition hover:scale-105"
              >
                <Heart
                  className={`h-5 w-5 ${liked ? "fill-red-500 text-red-500" : "text-[#1b1c19]"
                    }`}
                />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-1 text-[#6b5d3e]">
              {[1, 2, 3, 4].map((item) => (
                <Star key={item} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4 fill-current opacity-60" />
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#434843]">
                4.8 / Sharhlar
              </span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <h1 className="max-w-md font-serif text-4xl font-bold leading-tight text-[#213426] sm:text-5xl">
                {product.name}
              </h1>
              <p className="shrink-0 text-2xl font-bold text-[#6b5d3e]">
                {Number(product.price).toLocaleString()} UZS
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#434843] sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-14 w-fit items-center rounded-full bg-[#e9e8e3] px-2">
                <button
                  onClick={decrease}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-10 text-center text-lg font-bold">{quantity}</span>

                <button
                  onClick={increase}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={addedToCart}
                className={`flex h-14 flex-1 items-center justify-center gap-2 rounded-full px-6 font-bold tracking-wide text-white transition active:scale-[0.98] ${addedToCart
                    ? "bg-green-700"
                    : "bg-[#0c1f12] hover:opacity-95"
                  }`}
              >
                {addedToCart ? "Qo‘shildi" : "Savatga qo‘shish"}
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="rounded-full border border-[#c3c8c1] px-6 py-4 font-bold tracking-wide text-[#213426] transition hover:bg-[#efeee9]">
                Hozir sotib olish
              </button>

              <div className="rounded-full bg-[#efeee9] px-6 py-4 text-center font-semibold text-[#213426]">
                Jami: {totalPrice} UZS
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#e3e3de] pt-8 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#6b5d3e]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Premium mahsulot
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#6b5d3e]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Sifat kafolati
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-28">
          <div className="overflow-x-auto border-b border-[#e3e3de]">
            <div className="flex min-w-max gap-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`border-b-2 pb-4 pt-2 font-serif text-lg transition ${activeTab === "description"
                    ? "border-[#0c1f12] font-bold text-[#1b1c19]"
                    : "border-transparent text-[#434843] hover:text-[#1b1c19]"
                  }`}
              >
                Tavsif
              </button>

              <button
                onClick={() => setActiveTab("specifications")}
                className={`border-b-2 pb-4 pt-2 font-serif text-lg transition ${activeTab === "specifications"
                    ? "border-[#0c1f12] font-bold text-[#1b1c19]"
                    : "border-transparent text-[#434843] hover:text-[#1b1c19]"
                  }`}
              >
                Xususiyatlar
              </button>
            </div>
          </div>

          {activeTab === "description" && (
            <div className="py-10">
              <div className="max-w-3xl text-base leading-8 text-[#434843]">
                <p>{product.description}</p>
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="py-10">
              <div className="max-w-2xl rounded-[28px] bg-[#efeee9] p-6 sm:p-8">
                <h4 className="font-serif text-2xl font-bold text-[#1b1c19]">
                  Xususiyatlar
                </h4>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                    <span className="text-[#434843]">Nomi</span>
                    <span className="font-semibold text-[#1b1c19]">
                      {product.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 pb-3">
                    <span className="text-[#434843]">Narxi</span>
                    <span className="font-semibold text-[#1b1c19]">
                      {Number(product.price).toLocaleString()} UZS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}