"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';


const products = [
  {
    id: 1,
    title: "Meyn",
    brand: "Asento",
    price: "9 000 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    height: "h-[320px]",
  },
  {
    id: 2,
    title: "Svetilnik",
    brand: "Cozy House",
    price: "2 392 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80",
    height: "h-[430px]",
  },
  {
    id: 3,
    title: "Nastolnaya lampa",
    brand: "Cozy House",
    price: "1 095 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&auto=format&fit=crop&q=80",
    height: "h-[360px]",
  },
  {
    id: 4,
    title: "Jurnalniy stolik",
    brand: "Strong",
    price: "7 250 000 UZS",
    oldPrice: "7 855 000 UZS",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&auto=format&fit=crop&q=80",
    height: "h-[500px]",
  },
  {
    id: 5,
    title: "Divan",
    brand: "Maison",
    price: "12 400 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    height: "h-[300px]",
  },
  {
    id: 6,
    title: "Torшер",
    brand: "Lumen",
    price: "1 780 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80",
    height: "h-[420px]",
  },
  {
    id: 7,
    title: "Kreslo",
    brand: "Soft Line",
    price: "4 890 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop&q=80",
    height: "h-[340px]",
  },
  {
    id: 8,
    title: "Komod",
    brand: "Wood Art",
    price: "6 300 000 UZS",
    oldPrice: "6 950 000 UZS",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop&q=80",
    height: "h-[460px]",
  },
  {
    id: 9,
    title: "Dekor lampa",
    brand: "Glow Home",
    price: "980 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    height: "h-[310px]",
  },
  {
    id: 10,
    title: "Konsol stol",
    brand: "Nordic",
    price: "5 750 000 UZS",
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop&q=80",
    height: "h-[390px]",
  },
];

export default function OnlineMagazinePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-greenDeep">
<div className='absolute inset-0 opacity-25 pointer-events-none'>
        <div
          className='absolute top-0 right-0 w-[560px] h-[560px] rounded-full blur-[70px] gpu'
          style={{ background: "radial-gradient(circle, #C6A969 0%, transparent 70%)" }}
        />
        <div
          className='absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full blur-[60px] gpu'
          style={{ background: "radial-gradient(circle, #C6A969 0%, transparent 70%)" }}
        />
      </div>

       <div
        className='absolute inset-0 opacity-[0.025] pointer-events-none'
        style={{
          backgroundImage: `linear-gradient(#C6A969 1px, transparent 1px),
                            linear-gradient(90deg, #C6A969 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />


        <div className="relative mx-auto w-full max-w-[1600px] pt-3 sm:pt-5">
          <Navbar />
    <section className="mb-8 overflow-hidden rounded-[28px]  px-6 py-8 md:px-10 md:py-10 mt-14">
  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <p className="mb-2 text-lg font-medium uppercase tracking-[0.18em] text-white">
        Online Magazine
      </p>

      <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
        Uyingiz uchun mos mebellarni qulay tanlang
      </h1>

      <p className="mt-3 text-sm leading-7 text-gray-300 md:text-base">
        Zamonaviy, nafis va funksional mebellarni bir sahifada ko‘rib,
        interyeringizga mos variantlarni toping.
      </p>
    </div>

    <div className="flex gap-3 text-sm text-[#7b746b]">
      <span className="rounded-full bg-white/70 px-4 py-2">Premium</span>
      <span className="rounded-full bg-white/70 px-4 py-2">Modern</span>
      <span className="rounded-full bg-white/70 px-4 py-2">Elegant</span>
    </div>
  </div>
</section>

    <section className="w-full bg-[#f5f5f5] px-4 py-8 md:px-6 lg:px-8 mt-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
          Mahsulotlar
        </h2>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="mb-5 break-inside-avoid rounded-[24px] bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="">
                <div
                  className={`w-full overflow-hidden rounded-[22px] rounded-b ${product.height}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <p className="text-sm text-neutral-500">{product.brand}</p>

                  <div className="text-right">
                    {product.oldPrice && (
                      <p className="text-xs text-neutral-400 line-through">
                        {product.oldPrice}
                      </p>
                    )}
                    <p className="text-sm text-neutral-600">{product.price}</p>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <h3 className="max-w-[70%] text-[20px] font-medium leading-tight text-neutral-900">
                    {product.title}
                  </h3>

                  <button className="rounded-full bg-[#111827] px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
                    O‘tish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
         
        </div>
      </main>
      <Footer />
    </>
  );
}
