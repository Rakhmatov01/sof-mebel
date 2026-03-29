"use client";

import { useEffect, useState } from "react";
import { listCategories } from "@/lib/api/sofmebelApi";
import type { CategoryModel } from "@/lib/types/api";

export function ApiDemo() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await listCategories();
        setCategories(data);
      } catch (err) {
        setError("Kategoriyalarni olishda xatolik yuz berdi.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-sm text-slate-600">Kategoriyalar yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-sm text-red-600">{error}</div>;
  }

  return (
    <section className="mx-auto my-10 max-w-5xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">API Demo: Kategoriyalar</h2>
      {categories.length === 0 ? (
        <p className="text-sm text-slate-600">Kategoriyalar topilmadi.</p>
      ) : (
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <p className="font-medium text-slate-900">{category.name}</p>
              <p className="text-sm text-slate-500">slug: {category.slug}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
