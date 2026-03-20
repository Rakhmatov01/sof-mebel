import Link from "next/link";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ContactUsPage() {
  return (
        <>
      <main className="relative min-h-screen overflow-hidden pb-10 bg-greenDeep">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-64 h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />
    <section className="relative overflow-hidden px-3 pb-16 sm:px-5 pt-12">
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-goldAccent/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Hero block */}
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#123222] via-[#173f2b] to-[#1d4b33] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-goldAccent/30 bg-goldAccent/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-goldAccent">
              Contact Us
            </div>

            <h1 className="max-w-xl font-[var(--font-instrumental-serif)] text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Biz bilan <span className="text-goldAccent">bog‘laning</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Sof Mebel bilan zamonaviy va nafis interyer yechimlarini toping.
              Savollaringiz bo‘lsa, buyurtma bermoqchi bo‘lsangiz yoki showroom
              haqida ma’lumot kerak bo‘lsa, biz sizga mamnuniyat bilan yordam
              beramiz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center rounded-full bg-goldAccent px-7 py-3 text-sm font-semibold text-[#173b29] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Xabar yuborish
              </a>

              <Link
                href="/show-room"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                Showroomni ko‘rish
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-6 sm:p-8">
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-goldAccent/20" />
            <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full bg-goldAccent/10 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                  Aloqa ma’lumotlari
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Sizga qulay usulni tanlang
                </h2>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-goldAccent" />
                    <div>
                      <p className="text-sm text-white/45">Telefon</p>
                      <p className="mt-1 text-base font-medium text-white">
                        +998 90 123 45 67
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-goldAccent" />
                    <div>
                      <p className="text-sm text-white/45">Email</p>
                      <p className="mt-1 text-base font-medium text-white">
                        info@sofmebel.uz
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-goldAccent" />
                    <div>
                      <p className="text-sm text-white/45">Manzil</p>
                      <p className="mt-1 text-base font-medium text-white">
                        Toshkent shahri, Sof Mebel showroom
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-goldAccent" />
                    <div>
                      <p className="text-sm text-white/45">Ish vaqti</p>
                      <p className="mt-1 text-base font-medium text-white">
                        Dushanba – Shanba, 09:00 – 19:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form + side info */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          {/* Form */}
          <div
            id="contact-form"
            className="rounded-[2rem] border border-white/10 bg-[#143524]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.22em] text-goldAccent">
                Xabar yuborish
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Loyihangiz haqida yozing
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Sizga mos mebel, interyer uslubi yoki buyurtma tafsilotlari
                haqida yozib qoldiring. Tez orada siz bilan bog‘lanamiz.
              </p>
            </div>

            <form className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">Ism</label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-goldAccent/40 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Familiya
                </label>
                <input
                  type="text"
                  placeholder="Familiyangiz"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-goldAccent/40 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-goldAccent/40 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Telefon
                </label>
                <input
                  type="text"
                  placeholder="+998 ..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-goldAccent/40 focus:bg-white/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-white/70">
                  Xabar
                </label>
                <textarea
                  rows={6}
                  placeholder="Qanday mebel yoki xizmat sizni qiziqtiryapti?"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 transition focus:border-goldAccent/40 focus:bg-white/10"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-sm text-white/45">
                  Yuborilgan ma’lumotlar maxfiy saqlanadi.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-goldAccent px-7 py-3 text-sm font-semibold text-[#173b29] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Xabar yuborish
                </button>
              </div>
            </form>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#143524]/95 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-goldAccent">
                Showroom
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Premium muhitda tanlang
              </h3>
              <p className="mt-3 text-white/70">
                Mahsulotlarni yaqindan ko‘rish, material sifati va dizaynni
                baholash uchun showroomimizga tashrif buyuring.
              </p>

              <Link
                href="/show-room"
                className="mt-6 inline-flex rounded-full border border-goldAccent/30 bg-goldAccent/5 px-5 py-3 text-sm font-medium text-goldAccent transition hover:bg-goldAccent/10"
              >
                Showroom sahifasi
              </Link>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-goldAccent/10 to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-goldAccent">
                Tezkor aloqa
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Savollaringiz bormi?
              </h3>
              <p className="mt-3 text-white/70">
                Buyurtma, narx yoki individual loyiha bo‘yicha tezkor javob
                olish uchun bizga qo‘ng‘iroq qiling.
              </p>

              <a
                href="tel:+998901234567"
                className="mt-6 inline-flex rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
              >
                +998 90 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
      </main>
      <Footer />
    </>
  );
}