import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Collections } from "@/components/Collections";
import { Showroom } from "@/components/Showroom";

export default function HomePage() {
  return (
    <>
      <main className='relative overflow-hidden'>
        <div className='pointer-events-none absolute left-0 top-44 h-72 w-72 rounded-full bg-goldAccent/15 blur-3xl' />
        <div className='pointer-events-none absolute right-0 top-[35rem] h-96 w-96 rounded-full bg-greenDeep/10 blur-3xl' />
        <div className='relative w-full'>
          <Navbar />
          <Hero />
        </div>
        <Collections />
        <Showroom />
      </main>
      <Footer />
    </>
  );
}
