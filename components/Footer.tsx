"use client";
import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
export function Footer() {

  return (
    <footer className='relative w-full pt-20 pb-8 bg-greenDeep'>
      <div className='absolute top-0 left-0 right-0 h-px opacity-30 bg-goldAccent' />

      <div className='absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none'>
        <div
          className='w-full h-full rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div className='relative z-10 container-custom'>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href='/'>
              <div className='text-2xl lg:text-3xl font-semibold tracking-tight text-white font-brand'>
                <span className='font-brand text-goldAccent'>Sof</span> Mebel
              </div>
            </Link>
            <p className='text-sm leading-relaxed mb-6 text-white/60'>
              2012-yildan beri abadiy nafislikni yaratamiz. Biz makonlarni
              o‘zgartiradigan va turmush tarzini yuksaltiradigan, avlodlarga
              meros bo‘lib qoladigan mahsulotlar ishlab chiqamiz.
            </p>

            <div className='flex gap-3'>
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href='#'
                    className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-goldAccent/10 border border-goldAccent/30'
                    aria-label={social.label}
                  >
                    <Icon className='w-4 h-4 text-goldAccent' />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h5 className='text-lg mb-6 text-white font-normal'>
              Tezkor Havolalar
            </h5>
            <ul className='space-y-3'>
              {[
                "Kolleksiyalar",
                "Yangi Kelganlar",
                "Eng Sotilganlar",
                "Buyurtma bo'yicha",
                "Dizayn Xizmatlari",
                "Parvarishlash va xizmat",
              ].map(link => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm transition-colors duration-300 hover:text-goldAccent text-white/60'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h5 className='text-lg mb-6 text-white font-normal'>
              Mijozlarga Xizmat Ko&apos;rsatish
            </h5>
            <ul className='space-y-3'>
              {[
                "Biz haqimizda",
                "Bog‘lanish",
                "Shourumga tashrif",
                "Yetkazib berish va jo‘natish",
                "Qaytarish va almashtirish",
                "Kafolat ma’lumotlari",
                "Tez-tez so‘raladigan savollar (FAQ)",
              ].map(link => (
                <li key={link}>
                  <a
                    href='#'
                    className='text-sm transition-colors duration-300 hover:text-goldAccent text-white/60'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h5 className='text-lg mb-6 text-white font-normal'>Bog‘lanish</h5>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3 text-white/60'>
                <MapPin className='w-5 h-5 mt-1 flex-shrink-0 text-goldAccent' />
                <span className='text-sm'>
                  Amir Temur ko‘chasi, 12-uy
                  <br />
                  Toshkent shahri, 100000
                  <br />
                  O‘zbekiston
                </span>
              </li>
              <li className='flex items-center gap-3 text-white/60'>
                <Phone className='w-5 h-5 flex-shrink-0 text-goldAccent' />
                <a
                  href='tel:+15551234567'
                  className='text-sm transition-colors duration-300 hover:text-goldAccent'
                >
                  +998 (90) 123-45-67
                </a>
              </li>
              <li className='flex items-center gap-3 text-white/60'>
                <Mail className='w-5 h-5 flex-shrink-0 text-goldAccent' />
                <a
                  href='mailto:info@sofmebel.com'
                  className='text-sm transition-colors duration-300 hover:text-goldAccent'
                >
                  info@sofmebel.uz
                </a>
              </li>
            </ul>

            <div className='mt-6 p-4 rounded-xl bg-goldAccent/5'>
              <h6 className='text-sm mb-2 text-goldAccent font-medium'>
                Ish Vaqti
              </h6>
              <p className='text-xs text-white/50'>
                Dushanba - Juma: 9:00 - 19:00
                <br />
                Shanba: 10:00 - 18:00
                <br />
                Yakshanba: 12:00 - 17:00
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-goldAccent/20'
        >
          <p className='text-sm text-center md:text-left text-white/50'>
            © 2026 SofMebel.uz. Barcha huquqlar himoyalangan.
          </p>

          <div className='flex flex-wrap justify-center gap-6'>
            {["Maxfiylik Siyosati", "Xizmat Shartlari", "Cookie Siyosati"].map(
              link => (
                <a
                  key={link}
                  href='#'
                  className='text-sm transition-colors duration-300 hover:text-goldAccent text-white/50'
                >
                  {link}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
