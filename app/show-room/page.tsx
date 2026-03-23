"use client";

import { Navbar } from '@/components/Navbar';
import { ImageWithFallback } from '@/components/ui/ImageWithFallBack';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    title: "Meyn",
    brand: "Asento",
    price: "9 000 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    height: "h-[520px]",
  },
  {
    id: 2,
    title: "Svetilnik",
    brand: "Cozy House",
    price: "2 392 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80",
    height: "h-[430px]",
  },
  {
    id: 3,
    title: "Nastolnaya lampa",
    brand: "Cozy House",
    price: "1 095 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop&q=80",
    height: "h-[460px]",
  },
  {
    id: 4,
    title: "Jurnalniy stolik",
    brand: "Strong",
    price: "7 250 000 UZS",
    oldPrice: "7 855 000 UZS",
    url:
    "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop&q=80",
    height: "h-[500px]",
  },
  {
    id: 5,
    title: "Divan",
    brand: "Maison",
    price: "12 400 000 UZS",
    oldPrice: null,
    url:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    height: "h-[300px]",
  },
  {
    id: 6,
    title: "Dekor lampa",
    brand: "Glow Home",
    price: "980 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
      height: "h-[510px]",
    },
  {
    id: 7,
    title: "Kreslo",
    brand: "Soft Line",
    price: "4 890 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop&q=80",
    height: "h-[340px]",
  },
  {
    id: 8,
    title: "Komod",
    brand: "Wood Art",
    price: "6 300 000 UZS",
    oldPrice: "6 950 000 UZS",
    url:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=80",
    height: "h-[460px]",
  },
    {
      id: 9,
      title: "Torшер",
      brand: "Lumen",
      price: "1 780 000 UZS",
      oldPrice: null,
      url:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
      height: "h-[520px]",
    },
  {
    id: 10,
    title: "Konsol stol",
    brand: "Nordic",
    price: "5 750 000 UZS",
    oldPrice: null,
    url:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80",
    height: "h-[390px]",
  },
   {
    id: 11,
    url: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXJuaXR1cmUlMjBzaG93cm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTg0MDAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Main Showroom",
    category: "Interior",
    height: "h-[550px]",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1766802981823-7952790a7eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBzdG9yZSUyMGRpc3BsYXl8ZW58MXx8fHwxNzcxODUzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Display Area",
    category: "Showcase",
    height: "h-[460px]",

  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3MTc5MDExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Living Room Setup",
    category: "Display",
    height: "h-[520px]",

  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1768946131535-b90bad125f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiZWRyb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc3MTg0Njc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Bedroom Collection",
    category: "Display",
    height: "h-[500px]",

  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1766802981817-776406db6807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZ1cm5pdHVyZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzcxODUzMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Designer Exhibition",
    category: "Featured",
    height: "h-[480px]",

  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1763231575952-98244918f99b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjByb29tJTIwc2V0dXB8ZW58MXx8fHwxNzcxODUzMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Dining Experience",
    category: "Display",
    height: "h-[640px]",

  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1737233347389-24bc3f3fe3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaG9tZSUyMG9mZmljZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NzE4NTMxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Office Suite",
    category: "Display",
    height: "h-[590px]",

  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1759038086846-c97a8adfce98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb3VuZ2UlMjBhcmVhJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODUzMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Lounge Area",
    category: "Display",
    height: "h-[350px]",

  },
];


export default function ShowRoom() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
    const handleNext = () => {
      if (selectedImage !== null) {
        setSelectedImage((selectedImage + 1) % galleryImages.length);
      }
    };
  
    const handlePrev = () => {
      if (selectedImage !== null) {
        setSelectedImage(
          (selectedImage - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-64 h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1" />
        <section className="relative w-full py-24 lg:py-32 bg-white">
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] opacity-5 pointer-events-none">
        <div
          className="w-full h-full rounded-full blur-[100px]"
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full mb-6 bg-goldAccent/10 border border-goldAccent/30"
          >
            <span className="text-sm tracking-wide text-goldAccent">
              Tashrif buyuring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tight font-serif text-greenDeep font-light -tracking-[0.02em]"
          >
            Bizning Hashamatli
            <span className="block mt-2 text-goldAccent font-normal">
              Ko‘rgazma Zalimiz
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto text-greenDeep/60"
          >
            Nafis hashamat olamiga qadam qo‘ying. Did bilan saralangan
            kolleksiyalarimizni chiroyli bezatilgan makonlarda his eting.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6 space-y-4 lg:space-y-6 mb-16"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid mb-4 lg:mb-6"
            >
              <div
                className="group relative overflow-hidden rounded-[24px] cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className={`relative w-full ${image.height}`}>
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-300" />

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300">
                    <ZoomIn className="w-5 h-5 text-greenDeep" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-lg font-medium">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-greenDeep/95"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-goldAccent/20 border border-goldAccent/40 text-goldAccent"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-goldAccent/20 border border-goldAccent/40 text-goldAccent"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-goldAccent/20 border border-goldAccent/40 text-goldAccent"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 rounded-b-2xl bg-gradient-to-t from-greenDeep/90 to-transparent">
                <div className="text-2xl text-white">
                  {galleryImages[selectedImage].title}
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm bg-goldAccent/20 border border-goldAccent/40 text-goldAccent">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

        <footer className='bg-greenDeep'>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 flex flex-col md:flex-row justify-between items-center gap-4 "
          >
            <p className="text-sm text-center md:text-left text-white/50">
              © 2026 SofMebel.uz. Barcha huquqlar himoyalangan.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {["Maxfiylik Siyosati", "Xizmat Shartlari", "Cookie Siyosati"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm transition-colors duration-300 hover:text-goldAccent text-white/50"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}