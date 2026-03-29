"use client";

import { useQuery } from "@tanstack/react-query";
import { listCategories } from "@/lib/api/sofmebelApi";
import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ui/ImageWithFallBack";
import Link from "next/link";
import { Loader2 } from "lucide-react";


const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return "/placeholder.png";
  const path = imagePath.trim();
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  return `${baseUrl}${path}`;
};

const getAspectRatio = (index: number) => {
  if (index === 0 || index === 1 || index === 6 || index === 7) return "5 / 3";
  return "5 / 4";
};

export function Collections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // TanStack Query for Categories
  const { data: categories, isLoading } = useQuery({
    queryKey: ["main-categories"],
    queryFn: async () => {
      const all = await listCategories();
      // Filter main_true and take first 8
      return all.filter(c => c.main_true).slice(0, 8);
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div className='relative w-full py-24 lg:py-32 overflow-hidden bg-[#faf9f0]'>
      <div className='absolute top-0 right-0 w-[600px] h-[600px] opacity-5 pointer-events-none'>
        <div
          className='w-full h-full rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #1F3D2B 0%, transparent 70%)",
          }}
        />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16'>
        {/* Absolute Center Title - Preserved from Mock */}
        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-96 p-8 px-16 rounded-full bg-white shadow-2xl flex flex-col items-center border border-neutral-100"
          >
            <h1 className="text-3xl text-goldAccent font-black text-center tracking-tighter uppercase">SOF-MEBEL</h1>
            <h2 className="text-sm font-medium tracking-[0.2em] text-neutral-400 mt-2 text-center uppercase">Eksklyuziv</h2>
            <h2 className="text-lg font-serif italic text-greenDeep mt-1 text-center font-bold">Kolleksiyalar</h2>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex h-96 items-center justify-center">
            <Loader2 className="animate-spin text-goldAccent" size={40} />
          </div>
        ) : (
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8'>
            {categories?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='group relative break-inside-avoid'
              >
                <div
                  className='relative rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl'
                  style={{ aspectRatio: getAspectRatio(index) }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredId === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className='w-full h-full'
                  >
                    <ImageWithFallback
                      src={getImageUrl(item.image)}
                      alt={item.name}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>

                  <Link href={`/products?category=${item.slug}`}>
                    <div
                      className={`absolute inset-0 transition-all duration-700 bg-gradient-to-t from-greenDeep/90 via-greenDeep/20 to-transparent ${hoveredId === item.id ? "opacity-100" : "opacity-60"
                        }`}
                    />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <motion.div
                        animate={{
                          y: hoveredId === item.id ? 0 : 5,
                          opacity: hoveredId === item.id ? 1 : 0.8,
                        }}
                        className="flex flex-col gap-1"
                      >
                        <span className="text-goldAccent text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Kategoriya</span>
                        <h3 className="text-white text-lg sm:text-2xl font-bold tracking-tight">
                          {item.name}
                        </h3>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: hoveredId === item.id ? 1 : 0,
                          x: hoveredId === item.id ? 0 : -10
                        }}
                        className="mt-4 flex items-center gap-2 text-white/80 text-xs font-semibold"
                      >
                        To'liq ko'rish
                        <div className="w-6 h-px bg-goldAccent" />
                      </motion.div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

