"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Bosh sahifa", href: "/" },
  { label: "Biz haqimizda", href: "/about-us" },
  { label: "Show Room", href: "/show-room" },
  { label: "Online Magazine", href: "/online-magazine" },
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
        // Close mobile menu on any scroll
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

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -110 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-greenDeep/80 border-b border-white/5'
    >
      <div className='mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12'>
        <Link href='/'>
          <div className='text-2xl lg:text-3xl font-semibold tracking-tight text-white font-brand'>
            <span className='font-brand text-goldAccent'>Sof</span> Mebel
          </div>
        </Link>

        <nav className='hidden items-center gap-10 text-[15px] font-medium tracking-wide text-white/90 md:flex'>
          {navItems.map(item => {
            const isActive = pathname === item.href;
            return <a
              key={item.label}
              href={item.href}
              className={`relative transition-colors duration-300 hover:text-goldAccent group ${isActive && 
                "text-goldAccent"
              }`}
            >
              {item.label}
              <span className='absolute -bottom-1 left-0 w-0 h-[1px] bg-goldAccent transition-all duration-300 group-hover:w-full' />
            </a>
                })}
        </nav>

        <div className='flex items-center gap-4 md:hidden'>
          <button
            type='button'
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className='flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white md:hidden transition-colors hover:bg-white/10'
            aria-label='Menyu'
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              viewBox='0 0 24 24'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            >
              {isMobileMenuOpen ? (
                <path d='M6 6l12 12M18 6l-12 12' />
              ) : (
                <path d='M4 8h16M4 16h16' />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className='w-full px-6 overflow-hidden md:hidden'
          >
            <nav
              id='mobile-menu'
              className='flex flex-col gap-2 py-6 border-t border-white/5'
            >
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block py-3 text-lg font-medium text-white/90 transition-colors hover:text-goldAccent active:text-goldAccent'
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
