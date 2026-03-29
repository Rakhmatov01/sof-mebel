"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useInfiniteQuery } from "@tanstack/react-query";
import { listProducts } from "@/lib/api/sofmebelApi";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ShowRoomCard } from '@/components/ShowRoomCard';
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from "motion/react";

export default function ShowRoom() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  // TanStack Infinite Query for Products
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["showroom-infinite"],
    queryFn: ({ pageParam = 1 }) => listProducts({ page: pageParam }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      // Extract page number from next URL
      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    },
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
  });

  const products = data?.pages.flatMap((page) => page.results) || [];

  // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % products.length);
    }
  }, [selectedImageIndex, products.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + products.length) % products.length
      );
    }
  }, [selectedImageIndex, products.length]);

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

  // Deterministic masonry heights based on ID
  const heights = ["h-[250px]", "h-[350px]", "h-[450px]", "h-[300px]", "h-[400px]"];
  const getMasonryHeight = (id: number) => heights[id % heights.length];

  return (
    <main className="relative min-h-screen bg-[#faf9f0] text-greenDeep">
      <Navbar />

      <main className="container-custom pt-32 pb-24">
        {/* Header Section */}
        <div className="mb-16">
          <Breadcrumb
            items={[
              { label: "Bosh sahifa", href: "/" },
              { label: "Show Room", href: "/show-room" },
            ]}
          />

          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full mb-6 bg-goldAccent/10 border border-goldAccent/20 text-[10px] font-bold uppercase tracking-[0.2em] text-goldAccent"
            >
              Exclusively Curated
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl font-bold tracking-tight text-greenDeep lg:text-7xl"
            >
              Ko‘rgazma <span className="text-goldAccent">Zalimiz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 leading-relaxed"
            >
              Nafis hashamat olamiga qadam qo‘ying. Siz uchun saralangan eng sara kolleksiyalar.
            </motion.p>
          </div>
        </div>

        {/* Gallery Grid - 2 columns on mobile */}
        <div className="relative min-h-[400px]">
          {isLoading && products.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <Loader2 className="animate-spin text-goldAccent" size={32} />
            </div>
          ) : products.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="columns-2 md:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6"
              >
                {products.map((product, index) => (
                  <ShowRoomCard
                    key={`${product.id}-${index}`}
                    product={product}
                    index={index}
                    height={getMasonryHeight(product.id)}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </motion.div>

              {/* Observer Target */}
              <div ref={observerTarget} className="h-20 flex items-center justify-center mt-12">
                {isFetchingNextPage && <Loader2 className="animate-spin text-goldAccent" size={24} />}
              </div>
            </>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-[32px] bg-white border border-dashed border-neutral-200">
              <p className="text-xl font-bold text-neutral-400">Hozircha ko‘rgazmalar mavjud emas.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal - Professional Refinement */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-greenDeep/95 backdrop-blur-2xl"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Navigation Controls - Side Arrows */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-[130]">
              <button
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all bg-white/10 border border-white/20 text-white hover:bg-white active:bg-white active:text-greenDeep active:scale-95 pointer-events-auto backdrop-blur-xl group"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronLeft size={28} className="sm:w-10 sm:h-10 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all bg-white/10 border border-white/20 text-white hover:bg-white active:bg-white active:text-greenDeep active:scale-95 pointer-events-auto backdrop-blur-xl group"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={28} className="sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Top Close Control - Premium Position */}
            <div className="absolute top-6 right-6 z-[140]">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/15 border border-white/20 text-white hover:bg-red-500 hover:border-red-400 active:scale-90 backdrop-blur-xl shadow-lg"
                onClick={() => setSelectedImageIndex(null)}
                title="Yopish (ESC)"
              >
                <X size={28} />
              </button>
            </div>

            {/* Image & Info Wrapper */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative flex flex-col items-center justify-center w-full h-[90vh] max-w-6xl px-4 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
                <img
                  src={getImageUrl(products[selectedImageIndex].images)}
                  alt={products[selectedImageIndex].name}
                  className="max-w-full max-h-full object-contain rounded-xl sm:rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-black/20"
                />
              </div>

              {/* Product Info In Modal - Compact & Clear */}
              <div className="w-full max-w-2xl px-6 py-8 text-center bg-gradient-to-t from-greenDeep/80 to-transparent rounded-b-3xl mt-4">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={products[selectedImageIndex].id + "-name"}
                  className="text-2xl sm:text-4xl font-serif text-white mb-3 font-medium tracking-tight"
                >
                  {products[selectedImageIndex].name}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  key={products[selectedImageIndex].id + "-price"}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mt-2">
                    {selectedImageIndex + 1} / {products.length}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}