"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import {
  Store,
} from "lucide-react";
import Pagination from "@/components/pagination";
import { listCategories, listProducts } from "@/lib/api/sofmebelApi";
import { CategoryModel, ProductModel } from "@/lib/types/api";

export default function OnlineMagazinePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<string>("");
  const [productsError, setProductsError] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        setCategoriesError("");

        const data = await listCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
        setCategoriesError("Kategoriyalarni yuklab bo‘lmadi.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        setProductsError("");

        const data = await listProducts({
          category: selectedCategory === "all" ? undefined : selectedCategory,
          page: currentPage,
        });

        setProducts(data.results);

        const calculatedTotalPages =
          data.count > 0 ? Math.ceil(data.count / (data.results.length || 1)) : 1;

        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error(error);
        setProductsError("Mahsulotlarni yuklab bo‘lmadi.");
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, currentPage]);

  const categoryTabs = useMemo(() => {
    return [
      { label: "Barchasi", value: "all" },
      ...categories.map((category) => ({
        label: category.name,
        value: category.slug,
      })),
    ];
  }, [categories]);

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

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-greenDeep pb-32 md:pb-0">
        <Navbar />

        {/* Ambient background decorative elements */}
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

        <div className="relative pt-24 md:pt-32">
          <div className="container-custom">
            {/* Header Content Section - Aligned via container-custom */}
            <section className="mb-8 rounded-[28px] py-4 md:mb-12 md:py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-goldAccent md:text-lg md:font-medium md:tracking-[0.18em] md:text-white">
                    Onlayn Magazin
                  </p>

                  <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    Uyingiz uchun mos mebellarni qulay tanlang
                  </h1>

                  <p className="mt-4 text-sm leading-7 text-gray-300 md:mt-6 md:text-base md:leading-8">
                    Zamonaviy, nafis va funksional mebellarni bir sahifada ko‘rib,
                    interyeringizga mos variantlarni toping.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-[10px] text-[#203b28] md:gap-3 md:text-sm md:text-[#7b746b]">
                  <span className="rounded-full bg-white/70 px-4 py-2 font-medium md:bg-white/80">
                    Premium
                  </span>
                  <span className="rounded-full bg-white/70 px-4 py-2 font-medium md:bg-white/80">
                    Zamonaviy
                  </span>
                  <span className="rounded-full bg-white/70 px-4 py-2 font-medium md:bg-white/80">
                    Nafis
                  </span>
                </div>
              </div>
            </section>

            {/* Categories Section - Aligned via container-custom */}
            <section className="relative mb-12">
              <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:-mx-12 lg:px-12">
                <div className="flex w-max gap-3 py-2">
                  {loadingCategories ? (
                    <p className="text-sm text-white/60">Kategoriyalar yuklanmoqda...</p>
                  ) : categoriesError ? (
                    <p className="text-sm text-red-300/80">{categoriesError}</p>
                  ) : (
                    categoryTabs.map((category) => {
                      const isActive = selectedCategory === category.value;

                      return (
                        <button
                          key={category.value}
                          onClick={() => {
                            setSelectedCategory(category.value);
                            setCurrentPage(1);
                          }}
                          className={`whitespace-nowrap rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all md:text-sm ${isActive
                            ? "bg-white text-greenDeep shadow-soft"
                            : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                        >
                          {category.label}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </section>
          </div>

          <section className="relative mt-4 bg-[#f8f7f2] py-12">
            <div className="absolute -top-8 left-0 right-0 h-16 rounded-[40px] bg-[#f8f7f2]" />

            <div className="container-custom">
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  Mahsulotlar
                </h2>
                <div className="h-0.5 flex-1 mx-6 bg-neutral-200 hidden sm:block opacity-20" />
                <p className="text-sm font-medium text-neutral-500">
                  {products.length} ta natija
                </p>
              </div>

              {loadingProducts ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-96 animate-pulse rounded-3xl bg-neutral-200" />
                  ))}
                </div>
              ) : productsError ? (
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
                  <p className="text-sm text-red-600 font-medium">{productsError}</p>
                </div>
              ) : products.length === 0 ? (
                <div className="rounded-2xl border border-neutral-100 bg-white p-12 text-center shadow-sm">
                  <Store className="mx-auto mb-4 text-neutral-300" size={48} />
                  <p className="text-neutral-500 font-medium">Hozircha mahsulot topilmadi.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col rounded-[24px] bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]">
                        <img
                          src={getImageUrl(product.images)}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                        <Link
                          href={`/product-detail/${product.slug}`}
                          className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          <div className="flex w-full items-center justify-center rounded-xl bg-white/95 backdrop-blur-md px-4 py-3 text-xs font-bold uppercase tracking-widest text-greenDeep">
                            Sotib olish
                          </div>
                        </Link>
                      </div>

                      <div className="px-3 pb-3 pt-4">
                        <div className="mb-2 flex items-start justify-between">
                          <div className="flex-1 overflow-hidden">
                            <h3 className="truncate text-sm font-semibold text-neutral-900 md:text-lg">
                              {product.name}
                            </h3>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 md:text-xs">
                              {
                                categories.find(
                                  (category) => category.id === product.category
                                )?.name || "Premium Mebel"
                              }
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          <p className="text-sm font-bold text-greenDeep md:text-base">
                            {Number(product.price).toLocaleString()} UZS
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-16">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={(page: number) => setCurrentPage(page)}
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}