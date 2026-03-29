"use client";

import { motion } from "motion/react";
import { ZoomIn } from "lucide-react";
import { ProductModel } from "@/lib/types/api";

interface ShowRoomCardProps {
  product: ProductModel;
  index: number;
  height: string;
  onClick: () => void;
}

export const ShowRoomCard = ({ product, index, height, onClick }: ShowRoomCardProps) => {
  const getImageUrl = (images?: string | string[]) => {
    if (!images) return "/placeholder.png";
    
    // Handle both string and array formats from API
    let firstImage = "";
    if (Array.isArray(images)) {
      firstImage = images[0];
    } else if (typeof images === "string") {
      // Sometimes it's a stringified array or a comma-separated list
      if (images.startsWith("[") && images.endsWith("]")) {
        try {
          const parsed = JSON.parse(images);
          firstImage = Array.isArray(parsed) ? parsed[0] : images;
        } catch {
          firstImage = images;
        }
      } else {
        firstImage = images;
      }
    }

    if (!firstImage || typeof firstImage !== "string") return "/placeholder.png";
    firstImage = firstImage.trim();

    if (firstImage.startsWith("http://") || firstImage.startsWith("https://")) {
      return firstImage;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    return `${baseUrl}${firstImage}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 10) * 0.05 }}
      className="break-inside-avoid"
    >
      <div
        className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] cursor-pointer bg-white p-1.5 sm:p-2 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
        onClick={onClick}
      >
        <div className={`relative w-full overflow-hidden rounded-[18px] sm:rounded-[24px] ${height}`}>
          <img
            src={getImageUrl(product.images)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-greenDeep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-greenDeep" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-white text-xs sm:text-lg font-bold truncate">
              {product.name}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
