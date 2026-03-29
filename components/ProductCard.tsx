"use client";

import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import type { ProductModel } from "@/lib/types/api";

interface ProductCardProps {
  product: ProductModel;
  categoryName?: string;
}

export function ProductCard({ product, categoryName }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const getImageUrl = (images?: string) => {
    if (!images) return "/placeholder.png";
    const firstImage = images[0]?.trim();
    if (!firstImage) return "/placeholder.png";

    if (firstImage.startsWith("http://") || firstImage.startsWith("https://")) {
      return firstImage;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    return `${baseUrl}${firstImage}`;
  };

  const imageUrl = getImageUrl(product.images);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: imageUrl,
      quantity: 1,
    });
  };

  return (
    <div className="group relative flex flex-col rounded-[24px] bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-neutral-100">
      {/* Image Section */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-neutral-50">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-greenDeep text-white shadow-lg transition-transform active:scale-95 hover:bg-greenDeep/95"
          >
            <ShoppingCart size={16} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Savatga</span>
          </button>

          <Link
            href={`/products/${product.slug}`}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-greenDeep shadow-lg backdrop-blur-md transition-transform active:scale-95 hover:bg-white"
          >
            <Eye size={18} />
          </Link>
        </div>

        {/* Badge (Optional: if rating is high or new) */}
        {product?.rating && product.rating > 4.5 && (
          <div className="absolute top-3 left-3 rounded-full bg-goldAccent px-2.5 py-1 text-[10px] font-bold text-greenDeep shadow-sm">
            TOP
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="px-3 pb-2 pt-4">
        <div className="flex flex-col gap-0.5">
          <h3 className="truncate text-sm font-bold text-greenDeep md:text-base">
            {product.name}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            {categoryName || "Premium Collection"}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-neutral-50 pt-2">
          <p className="text-sm font-black text-goldAccent md:text-lg">
            {Number(product.price).toLocaleString()} <span className="text-[10px] md:text-xs">UZS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
