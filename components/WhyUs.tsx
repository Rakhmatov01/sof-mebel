"use client";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { motion } from "motion/react";
import { Shield, Award, Palette, Truck, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Yuqori Darajadagi Servis",
    description:
      "Har bir mahsulot 25 yildan ortiq tajribaga ega bo‘lgan mohir ustalar tomonidan puxta va nozik did bilan qo‘lda tayyorlanadi.",
  },
  {
    icon: Palette,
    title: "Individual Dizayn",
    description:
      "Noyob didingizga mos to‘liq moslashtirish imkoniyati. Premium matolar, bezak turlari va konfiguratsiyalardan tanlang.",
  },
  {
    icon: Shield,
    title: "Umrbod Kafolat",
    description:
      "Barcha konstruktiv qismlar uchun keng qamrovli umrbod kafolat bilan sifatimizni kafolatlaymiz.",
  },
  {
    icon: Truck,
    title: "Premium Yetkazib Berish",
    description:
      "Professional yetkazib berish va o‘rnatish xizmati kiritilgan. Yig‘ishdan joylashtirishgacha barcha jarayonni biz hal qilamiz.",
  },
  {
    icon: Clock,
    title: "Abadiy Sifat",
    description:
      "Avlodlardan-avlodlarga xizmat qiladigan investitsion mahsulotlar. Mebellarimiz yillar davomida o‘z go‘zalligi va qulayligini saqlab qoladi.",
  },
  {
    icon: Users,
    title: "Shaxsiy Dizayn Maslahatchisi",
    description:
      "Mebel tanlash jarayonining har bir bosqichida sizga yo‘l-yo‘riq ko‘rsatadigan professional dizayn mutaxassislari.",
  },
];

const stats = [
  { end: 99, suffix: "%", label: "Mamnun mijozlar" },
  { end: 50, suffix: "K+", label: "Yetkazilgan mebellar" },
  { end: 15, suffix: "+", label: "Mavjud davlatlar" },
  { end: 100, suffix: "+", label: "Dizayn mukofotlari" },
];

export function WhyUs() {
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated) return;
        hasAnimated = true;

        const nodes = section.querySelectorAll<HTMLElement>("[data-stat-value]");

        stats.forEach((stat, index) => {
          const node = nodes[index];
          if (!node) return;

          const counter = { value: 0 };

          animate(counter, {
            value: [0, stat.end],
            duration: 3000,
            delay: index * 120,
            easing: "outExpo",
            onUpdate: () => {
              node.textContent = `${Math.floor(counter.value)}${stat.suffix}`;
            },
          });
        });

        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative w-full py-24 lg:py-32 overflow-hidden bg-greenDeep'>
      <div className='absolute inset-0 opacity-30'>
        <div
          className='absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[120px]'
          style={{
            background: "radial-gradient(circle, #C6A969 0%, transparent 70%)",
          }}
        />
        <div
          className='absolute bottom-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[100px]'
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
              Ustunlik
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-4xl lg:text-5xl xl:text-6xl mb-6 tracking-tight font-serif text-white font-light -tracking-[0.02em]'
          >
            Nega aynan
            <span className='block mt-2 text-goldAccent font-normal'>
              Bizning kolleksiyamiz?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg max-w-2xl mx-auto text-white/70'
          >
            Biz shunchaki mebel sotmaymiz — biz makonlarni o‘zgartiradigan va
            turmush tarzini yuksaltiradigan, avlodlardan-avlodlarga meros bo‘lib
            qoladigan mahsulotlar yaratamiz.
          </motion.p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group relative'
              >
                <div className='relative h-full p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] bg-white/5 border border-goldAccent/20'>
                  <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none [background:radial-gradient(circle_at_center,_rgba(198,169,105,0.1)_0%,_transparent_70%)]' />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className='relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-goldAccent/15 border border-goldAccent/30'
                  >
                    <Icon className='w-8 h-8 text-goldAccent' />
                  </motion.div>

                  <div className='relative space-y-3'>
                    <h3 className='text-2xl font-serif text-white font-normal'>
                      {feature.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-white/60'>
                      {feature.description}
                    </p>
                  </div>

                  <div className='absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-5 pointer-events-none [background:linear-gradient(135deg,_transparent_0%,_#C6A969_100%)]' />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-20 text-center'
        >
          <div className='relative max-w-4xl mx-auto p-12 lg:p-16 rounded-3xl overflow-hidden bg-goldAccent/10 border border-goldAccent/30'>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className='absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 pointer-events-none border-2 border-goldAccent'
            />

            <div className='relative z-10'>
              <h3 className='text-3xl lg:text-4xl mb-4 font-serif text-white font-light'>
                O&apos;z kenglingizni o&apos;zgartirishga tayyormisiz?
              </h3>
              <p className='text-lg mb-8 max-w-2xl mx-auto text-white/70'>
                Dizayn mutaxassislarimiz bilan maslahat uchrashuvini
                rejalashtiring va mebellarimiz yashash tajribangizni qanday
                yuksaltirishi mumkinligini kashf eting.
              </p>

              <div className='flex flex-wrap justify-center gap-4'>
                <button className='px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-goldAccent text-greenDeep font-medium'>
                  Konsultatsiya olish
                </button>
                <button className='px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 border border-white/30 text-white font-normal'>
                  Shourumni ko&apos;rish
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className='text-center p-6 rounded-2xl bg-white/5 border border-goldAccent/10'
            >
              <div
                data-stat-value
                className='text-4xl lg:text-5xl mb-2 text-goldAccent font-light tabular-nums'
              >
                0{stat.suffix}
              </div>
              <div className='text-sm text-white/50'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
