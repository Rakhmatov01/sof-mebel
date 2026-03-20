import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ShowRoom() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden pb-10">
        <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-64 h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />

          <section className="relative mt-28 overflow-hidden rounded-2xl border border-greenDeep/10 bg-[#f5f2eb] p-8 shadow-soft sm:p-10 lg:mt-32 lg:p-14">
            <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-goldAccent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-greenDeep/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.24em] text-goldAccent">Show Room</p>
              <h1 className="mt-3 font-display text-4xl text-greenDeep sm:text-5xl">Tez kunda</h1>
              <p className="mt-4 text-base text-greenDeep/80 sm:text-lg">Tez kunda ishga tushadi bu qism.</p>

              <div className="mt-8">
                <Link
                  href="/#bosh-sahifa"
                  className="inline-flex rounded-2xl bg-greenDeep px-6 py-3 text-sm font-semibold text-beigeLight transition duration-300 hover:-translate-y-0.5 hover:bg-[#294d38]"
                >
                  Bosh sahifaga qaytish
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
