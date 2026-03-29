"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { listCategories, listProducts } from "@/lib/api/sofmebelApi";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Pagination from "@/components/pagination";
import { motion, AnimatePresence } from "motion/react";
import { Search, Grid, List } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function OnlineMagazinePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");

  // TanStack Query for Categories
  const { data: categories = [], isLoading: loadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: listCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // TanStack Query for Products
  const {
    data: productsData,
    isLoading: loadingProducts,
    isPlaceholderData
  } = useQuery({
    queryKey: ["products", selectedCategory, currentPage, searchQuery],
    queryFn: () => listProducts({
      category: selectedCategory === "all" ? undefined : selectedCategory,
      page: currentPage,
    }),
    placeholderData: (previousData) => previousData,
  });

  const products = productsData?.results || [];
  const totalCount = productsData?.count || 0;

  const totalPages = useMemo(() => {
    if (!productsData) return 1;
    const itemsPerPage = productsData.results.length || 10;
    return Math.ceil(totalCount / itemsPerPage);
  }, [productsData, totalCount]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="min-h-screen bg-[#faf9f0] text-greenDeep">
      <Navbar />

      <main className="container-custom pt-32 pb-24">
        {/* Header Section */}
        <div className="mb-12">
          <Breadcrumb
            items={[
              { label: "Bosh sahifa", href: "/" },
              { label: "Mahsulotlar", href: "/products" },
            ]}
          />
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl font-bold tracking-tight text-greenDeep lg:text-7xl">
                Online <span className="text-goldAccent">Magazine</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-neutral-600">
                Uyingiz uchun eng sara va sifatli yumshoq mebellar kolleksiyasi.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
                <Grid size={20} className="text-goldAccent" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 opacity-40">
                <List size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section - Swiper-like horizontal scroll */}
        <div className="mb-12 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide flex-nowrap whitespace-nowrap">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`flex h-12 items-center rounded-2xl px-6 text-sm font-bold tracking-wider transition-all duration-300 shrink-0 ${selectedCategory === "all"
              ? "bg-greenDeep text-white shadow-lg shadow-greenDeep/20"
              : "bg-white text-greenDeep shadow-sm hover:bg-neutral-50 ring-1 ring-neutral-200"
              }`}
          >
            BARCHASI
          </button>

          {loadingCategories ? (
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 w-32 animate-pulse rounded-2xl bg-white shrink-0" />
            ))
          ) : (
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`flex h-12 items-center rounded-2xl px-6 text-sm font-bold tracking-wider transition-all duration-300 shrink-0 ${selectedCategory === category.slug
                  ? "bg-greenDeep text-white shadow-lg shadow-greenDeep/20"
                  : "bg-white text-greenDeep shadow-sm hover:bg-neutral-50 ring-1 ring-neutral-200"
                  }`}
              >
                {category.name.toUpperCase()}
              </button>
            ))
          )}
        </div>

        {/* Products Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {loadingProducts && !isPlaceholderData ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div key={i} className="h-[380px] animate-pulse rounded-[24px] bg-white" />
                ))}
              </motion.div>
            ) : products.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${currentPage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categoryName={categories.find(c => c.slug === selectedCategory)?.name}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex h-64 flex-col items-center justify-center rounded-[32px] bg-white shadow-sm"
              >
                <Search size={48} className="mb-4 text-neutral-200" />
                <p className="text-xl font-bold text-neutral-400">Mahsulotlar topilmadi.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}