"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "./ui/ImageWithFallBack";
import Link from "next/link";

import { useState } from "react";

const collections = [
  {
    id: 1,
    name: "Velvet Luxe",
    category: "Divanlar va Burchakli Divanlar",
    price: "Narxi $3,299 dan boshlab",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXNoaW9uZWQlMjBzb2ZhJTIwYmVpZ2V8ZW58MXx8fHwxNzcxODUwNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Nafis ipak mato va osmonga o‘xshash qulaylik",
    imageRatio:"5 / 3"
  },
  {
    id: 2,
    name: "Aurora Collection",
    category: "Kreslolar",
    price: "Narxi $1,899 dan boshlab",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1765663241884-ebd171bdda1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHZlbHZldCUyMGFybWNoYWlyfGVufDF8fHx8MTc3MTg1MDQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Haykaltaroshlik nafisligi bilan ajralib turuvchi dizayn",
    imageRatio:"5 / 3"
  },
  {
    id: 3,
    name: "Meridian Series",
    category: "Dam Olish Kreslolari",
    price: "Narxi $4,599 dan boshlab",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1759722665610-e13e59aa117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWN0aW9uYWwlMjBjb3VjaHxlbnwxfHx8fDE3NzE4NTA0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Zamonaviy yashash uchun moslashtiriladigan konfiguratsiyalar",
    imageRatio:"5 / 4"
  },
  {
    id: 4,
    name: "Zenith Lounge",
    category: "Dam Olish Kreslolari",
    price: "Narxi $2,199 dan boshlab",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1767050321604-a2654be8fad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbG91bmdlJTIwY2hhaXIlMjBjdXNoaW9ufGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Shakl va dam olishning mukammal uyg‘unligi",
    imageRatio:"5 / 4"
  },
  {
    id: 5,
    name: "Imperial Chaise",
    category: "Dekorativ Kreslolar",
    price: "Narxi $2,799 dan boshlab",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1768573264026-b540abdc3384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2hhaXNlJTIwbG9uZ3VlfGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Uzoq muddatli nafislik va zamonaviy dizayn uyg‘unligi",
    imageRatio:"5 / 4"
  },
  {
    id: 6,
    name: "Signature Series",
    category: "Dekorativ Kreslolar",
    price: "Narxi $1,599 dan boshlab",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1759264244744-4b0077534bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2NlbnQlMjBjaGFpciUyMGludGVyaW9yfGVufDF8fHx8MTc3MTg1MDQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Diqqatni o‘ziga tortuvchi jasur dizaynlar",
    imageRatio:"5 / 4"
  }, {
    id: 7,
    name: "Velvet Luxe",
    category: "Divanlar va Burchakli Divanlar",
    price: "Narxi $3,299 dan boshlab",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjdXNoaW9uZWQlMjBzb2ZhJTIwYmVpZ2V8ZW58MXx8fHwxNzcxODUwNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Nafis ipak mato va osmonga o‘xshash qulaylik",
    imageRatio:"5 / 3"
  },
  {
    id: 8,
    name: "Aurora Collection",
    category: "Kreslolar",
    price: "Narxi $1,899 dan boshlab",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1765663241884-ebd171bdda1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHZlbHZldCUyMGFybWNoYWlyfGVufDF8fHx8MTc3MTg1MDQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Haykaltaroshlik nafisligi bilan ajralib turuvchi dizayn",
    imageRatio:"5 / 3"
  },
];

export function Collections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className='relative w-full py-24 lg:py-32'>
      <div className='absolute top-0 right-0 w-[600px] h-[600px] opacity-5 pointer-events-none'>
        <div
          className='w-full h-full rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #1F3D2B 0%, transparent 70%)",
          }}
        />
      </div>

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16'>
<div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="w-80 sm:w-96 p-4 px-8 sm:px-16 rounded-full bg-white "
  >
    <h1 className="text-2xl text-goldAccent font-extrabold text-center">SOF-MEBEL</h1>
    <h2 className="text-lg tracking-wider text-center">Yumshoq mebellarning</h2>
    <h2 className="text-md font-semibold tracking-wider text-center">Sara dizaynli kolleksiyalari</h2>
  </motion.div>
</div>

        <div className='columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-4 lg:gap-6'>
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className='group relative'
            >

              <div className='relative rounded-3xl overflow-hidden mb-6'
              style={{aspectRatio : item.imageRatio}}>
                <motion.button
                  animate={{
                    scale: hoveredId === item.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className='w-full h-full'
                  >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-cover'
                    />
                </motion.button>

                    <Link href="/online-magazine">
                <div
                  className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-greenDeep/80 via-transparent to-transparent ${
                    hoveredId === item.id ? "opacity-100" : "opacity-70"
                  }`}
                />
                    </Link>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0,
                    y: hoveredId === item.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className='absolute w-full bottom-0 flex justify-between items-center p-3'
                >
                  <span className='text-white'>{item.name}</span>                  
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

