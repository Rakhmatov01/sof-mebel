"use client";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallBack";
import { Target, Heart, Lightbulb, Users2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Bizning Missiyamiz",
    description:
      "Innovatsion dizayn va mukammal sifat orqali hashamatli yashashni qayta belgilash, va mebellarni oilangiz merosining bir qismiga aylantirish.",
  },
  {
    icon: Heart,
    title: "Bizning Ehtirosimiz",
    description:
      "Har bir mahsulot o‘z hikoyasini aytadi. Biz uylardan haqiqiy uylar va makonlardan ilhomlantiruvchi maskanlar yaratadigan mebellar ishlab chiqarishda qalbimizni bag‘ishlaymiz.",
  },
  {
    icon: Lightbulb,
    title: "Bizning Innovatsiyamiz",
    description:
      "An’anaviy ustachilikni zamonaviy dizayn texnikalari bilan uyg‘unlashtirib, vaqt sinovidan o‘tadigan mebellar yaratish.",
  },
  {
    icon: Users2,
    title: "Bizning Jamiyatimiz",
    description:
      "Mijozlarimiz, ustalarimiz va dizaynerlar bilan mustahkam munosabatlar qurish. Birgalikda ilhom beruvchi va zavq bag‘ishlovchi makonlar yaratamiz.",
  },
];

export default function AboutUs() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-64 h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />

          <Navbar />
    <div id="biz-haqimizda" className='relative w-full py-24 lg:py-32 overflow-hidden bg-greenDeep'>
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
        <div
          className='absolute bottom-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[100px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `linear-gradient(#C6A969 1px, transparent 1px), linear-gradient(90deg, #C6A969 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12'>
        <div className='text-center mb-16 lg:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-goldAccent/30 bg-goldAccent/10'
          >
            <span className='text-sm tracking-wide text-goldAccent'>
              Bizning hikoyamiz
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tight font-serif text-white font-light -tracking-[0.02em]'
          >
            1998-yildan beri
            <span className='block mt-2 text-goldAccent font-normal'>
              Mukammallik yaratamiz
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg max-w-3xl mx-auto leading-relaxed text-white/70'
          >
            Ikki o‘n yillikdan ortiq vaqt davomida biz hashamatli mebel
            dizaynida yetakchilik qilmoqdamiz, abadiy nafislikni zamonaviy
            innovatsiyalar bilan uyg‘unlashtirib, trendlarni ortda qoldiradigan
            va avlodlarga meros bo‘lib qoladigan mahsulotlar yaratamiz.
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='relative h-[500px] rounded-3xl overflow-hidden'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1661446600373-125cfeadf275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzE4MDYxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Craftsman at work'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-greenDeep/60 to-transparent' />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='absolute -bottom-8 -right-8 p-8 rounded-2xl backdrop-blur-xl bg-goldAccent/90 border border-goldAccent/30'
            >
              <div className='text-5xl mb-2 text-greenDeep font-light'>25+</div>
              <div className='text-sm text-greenDeep/80'>
                Yillik mukammal tajriba
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <h3 className='text-3xl lg:text-4xl mb-6 font-serif text-white font-light'>
              Nozik did bilan yaratilgan
              <span className='text-goldAccent'> Dizayn merosi</span>
            </h3>

            <p className='text-base leading-relaxed text-white/70'>
              Bizning sayohatimiz Manhattan shahridagi kichik ustaxonaning
              eshigidan boshlandi, u yerda asoschi Alexander Sterling hashamatli
              yashash tajribasini qayta belgilaydigan mebellar yaratishni
              tasavvur qilgan edi. Dastlab ehtiros bilan boshlangan loyiha butun
              dunyoda tan olingan, nozik didli mijozlar tomonidan ishonch bilan
              tanlangan global brendga aylandi.
            </p>

            <p className='text-base leading-relaxed text-white/70'>
              Har bir mahsulotimiz mukammallikka bo‘lgan sadoqatimizning yorqin
              dalilidir. Bizning mohir ustalarimiz, ko‘pchiligi boshidan beri
              biz bilan birga ishlagan, har bir loyihaga o‘nlab yillik tajribani
              olib keladi. Biz faqat eng sifatli va barqaror manbalardan
              materiallar tanlaymiz, shunda go‘zallik va mas’uliyat birga
              uyg‘unlashadi.
            </p>

            <p className='text-base leading-relaxed text-white/70'>
              Bugun bizning mebellarimiz 15 dan ortiq mamlakatdagi uylarda,
              Toshkentdagi penthauslardan Chorvoqdagi villalargacha bezak
              sifatida joy olgan. Shu bilan birga, biz birinchi kundan boshlab
              bizni boshqargan tamoyillarga sodiq qolamiz: mukammal ustachilik,
              innovatsion dizayn va mijozlarimizning vizyoniga bo‘lgan qat’iy
              bag‘rikenglik.
            </p>

            <div className='flex gap-4 pt-4'>
              <div className='p-4 rounded-xl bg-goldAccent/10 border border-goldAccent/20'>
                <div className='text-2xl mb-1 text-goldAccent font-light'>
                  100+
                </div>
                <div className='text-xs text-white/50'>
                  Usta san&apos;atkorlar
                </div>
              </div>
              <div className='p-4 rounded-xl bg-goldAccent/10 border border-goldAccent/20'>
                <div className='text-2xl mb-1 text-goldAccent font-light'>
                  15+
                </div>
                <div className='text-xs text-white/50'>Davlatlar</div>
              </div>
              <div className='p-4 rounded-xl bg-goldAccent/10 border border-goldAccent/20'>
                <div className='text-2xl mb-1 text-goldAccent font-light'>
                  50K+
                </div>
                <div className='text-xs text-white/50'>Mamnun mijozlar</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='mb-16'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl lg:text-4xl text-center mb-12 font-serif text-white font-light'
          >
            Bizning Asosiy <span className='text-goldAccent'>Qadriyatlar</span>
          </motion.h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-white/5 border border-goldAccent/20'
                >
                  <div className='w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 bg-goldAccent/15'>
                    <Icon className='w-7 h-7 text-goldAccent' />
                  </div>
                  <h4 className='text-lg mb-2 font-serif text-white font-normal'>
                    {value.title}
                  </h4>
                  <p className='text-sm leading-relaxed text-white/60'>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='relative mt-20'
        >
          <h3 className='text-3xl lg:text-4xl text-center mb-16 font-serif text-white font-light'>
            Bizning <span className='text-goldAccent'>Tarix</span>
          </h3>

          <div className='relative max-w-4xl mx-auto'>
            <div className='absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block bg-goldAccent/20' />

            {[
              {
                year: "1998",
                title: "Boshlanish",
                description:
                  "Mukammallik vizyoniga ega kichik Manhattan ustaxonasida asos solindi",
              },
              {
                year: "2005",
                title: "Global Kengayish",
                description: "London, Parij va Dubay shourumlari ochildi",
              },
              {
                year: "2012",
                title: "Innovatsiya Mukofoti",
                description:
                  "Xalqaro Dizayn Mukammalligi Mukofoti bilan taqdirlandi",
              },
              {
                year: "2018",
                title: "Barqaror Kelajak",
                description:
                  "Barqaror materiallardan foydalangan ekologik toza kolleksiya ishga tushirildi",
              },
              {
                year: "2026",
                title: "Raqamli Inqilob",
                description:
                  "Butun dunyo bo‘ylab virtual shourum tajribalarini ilgari surish boshlandi",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className='absolute top-0 left-1/2 w-4 h-4 rounded-full -translate-x-1/2 hidden md:block bg-goldAccent' />

                <div className='p-6 rounded-2xl bg-white/5 border border-goldAccent/20'>
                  <div className='text-3xl mb-2 text-goldAccent font-light'>
                    {milestone.year}
                  </div>
                  <h4 className='text-xl mb-2 text-white font-normal'>
                    {milestone.title}
                  </h4>
                  <p className='text-sm text-white/60'>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
      </main>
      <Footer />
    </>
  );
}
