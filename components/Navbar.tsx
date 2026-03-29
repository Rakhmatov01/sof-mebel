"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Store, ShoppingCart, User, Search, Menu, X } from "lucide-react";

const navItems = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Biz haqimizda", href: "/about-us" },
  { label: "Show Room", href: "/show-room" },
  { label: "Online Magazine", href: "/products" },
  { label: "Contact us", href: "/contact-us" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (typeof window !== "undefined") {
        if (Math.abs(currentScrollY - prevScrollY) > 5) {
          setIsMobileMenuOpen(false);
        }

        if (currentScrollY < prevScrollY || currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (currentScrollY + windowHeight >= documentHeight - 20) {
          setIsVisible(false);
        }

        prevScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const actionItems = [
    { label: "Do‘kon", icon: Store, href: "/products" },
    { label: "Savat", icon: ShoppingCart, href: "/cart" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -110 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='fixed inset-x-0 top-0 z-[100] backdrop-blur-xl bg-greenDeep/85 border-b border-white/10'
    >
      <div className='container-custom flex items-center justify-between py-4'>
        {/* Logo */}
        <Link href='/'>
          <div className='text-2xl lg:text-3xl font-semibold tracking-tight text-white font-brand shrink-0'>
            <span className='font-brand text-goldAccent'>Sof</span> Mebel
          </div>
        </Link>

        {/* Center Navigation (Desktop) */}
        <nav className='hidden items-center gap-8 text-[14px] font-medium tracking-wide text-white/80 lg:flex'>
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative transition-colors duration-300 hover:text-white group ${isActive ? "text-goldAccent" : ""
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-goldAccent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='hidden sm:flex items-center gap-1 mr-2'>
            {actionItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`p-2.5 rounded-full transition-all duration-300 group relative ${isActive
                    ? "bg-goldAccent text-greenDeep"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  title={item.label}
                >
                  <Icon size={20} className="transition-transform group-hover:scale-110" />
                  {item.label === "Savat" && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-goldAccent rounded-full border border-greenDeep shadow-sm group-hover:scale-125 transition-transform" />
                  )}
                </Link>
              );
            })}
          </div>


          {/* Mobile Actions & Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/cart"
              className="p-2 text-white/70 hover:text-white relative"
            >
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-goldAccent rounded-full" />
            </Link>

            <button
              type='button'
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10 focus:outline-none'
              aria-label='Menyu'
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className='absolute inset-x-0 top-full bg-greenDeep/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 lg:hidden'
          >
            <nav className='flex flex-col gap-1'>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4 px-2">Menu</div>
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3.5 px-3 rounded-xl text-lg font-medium transition-all ${pathname === item.href
                    ? "bg-goldAccent/10 text-goldAccent"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
