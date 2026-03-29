"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
      <Link
        href="/"
        className="flex items-center hover:text-goldAccent transition-colors"
      >
        <Home size={12} className="mr-2" />
        BOSH
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={10} className="text-neutral-300" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-goldAccent transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
