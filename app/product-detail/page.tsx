"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ChevronLeft,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
  User,
  Star,
} from "lucide-react";

type ProductImage = {
  id: number;
  src: string;
  alt: string;
};

type ColorOption = {
  id: number;
  name: string;
  value: string;
};

type TabKey = "description" | "specifications" | "materials";

const productImages: ProductImage[] = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDDdMIWiHOPZ78gfyCqtI3hvKWT2zHkvKBTd8L_BnXNcEtow40eqIU_qyfRoA0M2FeVywLR7vOxs_hLwlDHj1IbeMBpClY8-_E8Uj1L0wxsqbRNROg1FJOgyX9Wagv7cLe_wfbFrDABa5R-cGpp1IyFyae5_T3aRreXJY9JbNQgyJJmcwEJrH2BSfwcAVHKrFEqVGpsEx6eA5aL6PNN9ii3WIm8D_YX0Z9eK3RCzjfv9bZsmYV0pJqjsaJGm0obO86WfoBBt-98tU",
    alt: "Aura Chair main view",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEVEkZS00YzOshejk3Dm9K3z6nzVFHXYrD47NeOru4FzTVKgU7vBhdVz9HaU02FY7bWujHW1hQgp_9FoD2aVj59bW6_6TfpgXSQewQTi5d-gJdr-e2v8adaynq7kvcPdmfS5XmHrlTw0XUHlzG6nme5bksa6cBWkW0vk0B-_DM05SIqf5KyfLDfqK2H49mUSFBL6u3AvN4vTlVd35N80iGEjFjhBcyoSLKTfMZqZgzP86lKk7fhgpPMWSwV7DCHPXe7oQ0smYfm9A",
    alt: "Aura Chair close up",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcmsDh1nrspYV-tuza2Cju0WlNoFqE1W4yb0WR3uLgS1JB-SRhx1AXjzCepJY_ahlJCXOnFgVnqanfeBG4UAEl84WmVua2NFOsldF6e2T4iCBAVcUAIFBDY14-U_F1JDm3iSD00J7wVbdboxq-AW51oGf9ic8o2U-GwsnkvGLoJF2otiLf5KdXUmXOwyOOCH1-xClLfe885QSqalKH1geQY34-8OBXcGslAHX857TbSa7kn5BMZhaTYyRvK-JksSsh4ikVQ4SQ8oo",
    alt: "Aura Chair side profile",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8teSXky-S8im2h-psRTXm-KrlyQq1fKjz3WG5ZtYO0mOLPns3O3Y8nNKKR8n1ANIIhjlZzfieQW5LMxqHJZ4rTd6L19AJzt4zvmzkIajbM_5b69nW8PWVoLf47EuAjYEFzrMEufgFABM-3ppHFSF8J0DyipPGsAWNH5w3yXmaoWoHMqJj763D9DvDPcBXiNZef2Z68p6sczxx0vud9BRM0UVblhkCg-lfl0ctq9GNkMeHlDoEi4X7mBnoRD2PFcXBSjAmDcF5xhA",
    alt: "Aura Chair rear view",
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL1FgdNkaCnzks_Dqq_0KoASO6jQlek8zW9cIgxmMC_IJtyg47ZRH_thFI4LR-meMcisJi_qsgKi_UtJcJtkdBnqcP2Xpix1KHVJ2IlNDv75ucQ5b1-Wq98R4VaK5FjUeTwF48lNOZqeHcsZyg3sTKRlEkIuUn2U2wghyYvOFg8yVSZJb4Nr_E44A2WnXQl01WFd0MN8X4alVY5ED_PEU35KZ5su7vV99sxyzmHcQkisfZoe9hzKjSmSqaR0t1oP-PT45t9B1icrE",
    alt: "Aura Chair in room",
  },
];

const relatedProducts = [
  {
    id: 1,
    name: "Nexus Side Table",
    price: "$89.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKjv3oY_O-1WVetAx4pggnk0M-FBYjTkXtdkuxyE0cm85j1jZCxdmQoZtlrmlf_v9mBijHcYHlyjrn2fSfYfHRPxuTegKNtbecLnFBhjbOb9dpup-kLGuxo6lNcdn_Hdtd9CyNyHFnBOwG4z7lLiSLtXFjGUYQlXVXiFV4VqqouOGNZFGhdAoX33JIlwYPHkjxerjGt-rPrsInhCa12ne7AFltM29vuQBR2jKWtLsygn_phlinGlhuHtRkiaOVTgSIMBpAIfC1ynw",
  },
  {
    id: 2,
    name: "Aria Rug",
    price: "$245.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6C0wX66Tet9rtmhTWRGusEOSwx8V3YrR8g6IH-nepQ3XFe1KutdzT1DQR0CTdJzPC5l3D-E_Yxs9W444l5dCs5zs6on4yNDJKxOPCa8clV_JXbdHXijt6Pbqs7GUmaf8aWthr5TyEaxf--anBI5olMd7zp5zXuPkTMWuyZbs8n5KeWPU2HZncfLqDHS8RMgz0H-fS9WBk_ArwLIUBBYgVzWdGc9DjnN2vHYA2IpsGdM8J7b6kC4sPPGwtz8oVtkw-ePhqjI0FA44",
  },
];

const colors: ColorOption[] = [
  { id: 1, name: "Forest Green", value: "#213426" },
  { id: 2, name: "Sunbleached Sand", value: "#6b5d3e" },
  { id: 3, name: "Charcoal", value: "#30312e" },
  { id: 4, name: "Mist", value: "#e5e2e1" },
];

const featureList = [
  "Italian Grade-A Velvet",
  "Solid Kiln-Dried Oak Frame",
  "High-Resilience Foam Padding",
];

const specifications = [
  { label: "Material", value: "Solid White Oak" },
  { label: "Finish", value: "Natural Matte Oil" },
  { label: "Dimensions", value: `32" H x 24" W x 22" D` },
  { label: "Assembly", value: "Fully Assembled" },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState<ProductImage>(productImages[0]);
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const [liked, setLiked] = useState(false);

  const totalPrice = useMemo(() => {
    return (199.99 * quantity).toFixed(2);
  }, [quantity]);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-[#faf9f4] text-[#1b1c19]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#faf9f4]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-full p-2 transition hover:bg-black/5 lg:hidden">
              <Menu className="h-5 w-5 text-[#213426]" />
            </button>

            <Link href="/online-magazine" className="hidden rounded-full p-2 transition hover:bg-black/5 lg:inline-flex">
              <ChevronLeft className="h-5 w-5 text-[#213426]" />
            </Link>

            <span className="font-serif text-2xl font-bold tracking-tight text-[#213426]">
              SafMebel
            </span>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#" className="text-sm font-medium text-black/50 transition hover:text-[#213426]">
              Collections
            </a>
            <a
              href="#"
              className="border-b-2 border-[#213426] pb-1 text-sm font-bold text-[#213426]"
            >
              Living
            </a>
            <a href="#" className="text-sm font-medium text-black/50 transition hover:text-[#213426]">
              Bedroom
            </a>
            <a href="#" className="text-sm font-medium text-black/50 transition hover:text-[#213426]">
              Dining
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="rounded-full p-2 transition hover:bg-black/5">
              <Search className="h-5 w-5 text-[#213426]" />
            </button>
            <button className="rounded-full p-2 transition hover:bg-black/5">
              <ShoppingBag className="h-5 w-5 text-[#213426]" />
            </button>
            <button className="rounded-full p-2 transition hover:bg-black/5">
              <User className="h-5 w-5 text-[#213426]" />
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[28px] bg-[#efeee9]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <button
                onClick={() => setLiked((prev) => !prev)}
                className="absolute right-4 top-4 rounded-full bg-white/80 p-3 shadow-sm backdrop-blur-md transition hover:scale-105"
              >
                <Heart
                  className={`h-5 w-5 ${
                    liked ? "fill-red-500 text-red-500" : "text-[#1b1c19]"
                  }`}
                />
              </button>
            </div>

            <div className="mt-4 hidden grid-cols-4 gap-4 sm:grid">
              {productImages.slice(1).map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border p-1 transition ${
                    selectedImage.id === image.id
                      ? "border-[#213426] bg-[#efeee9]"
                      : "border-transparent bg-[#efeee9]/70 hover:border-[#213426]/30"
                  }`}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-1 text-[#6b5d3e]">
              {[1, 2, 3, 4].map((item) => (
                <Star key={item} className="h-4 w-4 fill-current" />
              ))}
              <Star className="h-4 w-4 fill-current opacity-60" />
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#434843]">
                4.8 / 128 Reviews
              </span>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <h1 className="max-w-md font-serif text-4xl font-bold leading-tight text-[#213426] sm:text-5xl">
                Aura Chair
              </h1>
              <p className="shrink-0 text-2xl font-bold text-[#6b5d3e]">$199.99</p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#434843] sm:text-lg">
              Sculpted from sustainably sourced white oak, the Aura Chair features a fluid
              silhouette that marries ergonomic comfort with raw forest heritage. A testament
              to silent sophistication and artisanal longevity.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#434843]">
                Selected Finish
              </p>

              <div className="flex flex-wrap gap-4">
                {colors.map((color) => {
                  const isActive = color.id === selectedColor.id;

                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      aria-label={color.name}
                      title={color.name}
                      className={`h-12 w-12 rounded-full transition ${
                        isActive
                          ? "ring-2 ring-[#213426] ring-offset-4 ring-offset-[#faf9f4]"
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                  );
                })}
              </div>

              <p className="mt-4 text-sm text-[#434843]">{selectedColor.name}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-14 w-fit items-center rounded-full bg-[#e9e8e3] px-2">
                <button
                  onClick={decrease}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-10 text-center text-lg font-bold">{quantity}</span>

                <button
                  onClick={increase}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#0c1f12] px-6 font-bold tracking-wide text-white transition hover:opacity-95 active:scale-[0.98]">
                Add to Cart
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="rounded-full border border-[#c3c8c1] px-6 py-4 font-bold tracking-wide text-[#213426] transition hover:bg-[#efeee9]">
                Buy It Now
              </button>

              <div className="rounded-full bg-[#efeee9] px-6 py-4 text-center font-semibold text-[#213426]">
                Total: ${totalPrice}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#e3e3de] pt-8 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#6b5d3e]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Sustainable Oak
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#6b5d3e]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  10 Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-28">
          <div className="overflow-x-auto border-b border-[#e3e3de]">
            <div className="flex min-w-max gap-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`border-b-2 pb-4 pt-2 font-serif text-lg transition ${
                  activeTab === "description"
                    ? "border-[#0c1f12] font-bold text-[#1b1c19]"
                    : "border-transparent text-[#434843] hover:text-[#1b1c19]"
                }`}
              >
                Description
              </button>

              <button
                onClick={() => setActiveTab("specifications")}
                className={`border-b-2 pb-4 pt-2 font-serif text-lg transition ${
                  activeTab === "specifications"
                    ? "border-[#0c1f12] font-bold text-[#1b1c19]"
                    : "border-transparent text-[#434843] hover:text-[#1b1c19]"
                }`}
              >
                Specifications
              </button>

              <button
                onClick={() => setActiveTab("materials")}
                className={`border-b-2 pb-4 pt-2 font-serif text-lg transition ${
                  activeTab === "materials"
                    ? "border-[#0c1f12] font-bold text-[#1b1c19]"
                    : "border-transparent text-[#434843] hover:text-[#1b1c19]"
                }`}
              >
                Materials
              </button>
            </div>
          </div>

          {activeTab === "description" && (
            <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <h3 className="max-w-3xl font-serif text-3xl leading-snug text-[#1b1c19]">
                  A fusion of organic geometry and traditional joinery.
                </h3>

                <div className="mt-8 grid grid-cols-1 gap-8 text-base leading-8 text-[#434843] md:grid-cols-2">
                  <p>
                    The Aura Chair is a testament to refined comfort. Defined by its fluid
                    silhouette and premium velvet upholstery, it transforms any living space
                    into a private sanctuary.
                  </p>

                  <p>
                    Its ergonomic frame is hand-crafted from sustainable oak, ensuring both
                    structural integrity and a timeless aesthetic appeal that fits effortlessly
                    into modern interiors.
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {featureList.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-[#1b1c19]">
                      <CheckCircle className="h-5 w-5 text-[#6b5d3e]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] bg-[#efeee9] p-6 lg:col-span-4 lg:p-8">
                <h4 className="font-serif text-xl font-bold text-[#1b1c19]">Key Details</h4>

                <ul className="mt-6 space-y-4 text-sm">
                  {specifications.map((item, index) => (
                    <li
                      key={item.label}
                      className={`flex items-center justify-between gap-4 pb-3 ${
                        index !== specifications.length - 1 ? "border-b border-black/10" : ""
                      }`}
                    >
                      <span className="text-[#434843]">{item.label}</span>
                      <span className="text-right font-bold text-[#1b1c19]">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="py-10">
              <div className="max-w-2xl rounded-[28px] bg-[#efeee9] p-6 sm:p-8">
                <h4 className="font-serif text-2xl font-bold text-[#1b1c19]">
                  Specifications
                </h4>

                <div className="mt-6 space-y-4">
                  {specifications.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between gap-4 pb-3 ${
                        index !== specifications.length - 1 ? "border-b border-black/10" : ""
                      }`}
                    >
                      <span className="text-[#434843]">{item.label}</span>
                      <span className="font-semibold text-[#1b1c19]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "materials" && (
            <div className="py-10">
              <div className="max-w-3xl space-y-5 text-base leading-8 text-[#434843]">
                <p>
                  The chair combines premium velvet, solid kiln-dried oak, and
                  high-resilience foam padding to create a balance between softness,
                  support, and long-term durability.
                </p>
                <p>
                  Each material is selected to preserve the tactile warmth of natural
                  furniture while keeping the product elegant and comfortable for daily use.
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="mt-10 rounded-t-[40px] bg-[#efeee9] px-4 py-10 sm:px-6 lg:hidden">
          <h2 className="text-center font-serif text-2xl font-bold text-[#1b1c19]">
            Complete the Look
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-4">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <h4 className="truncate font-serif text-sm font-bold text-[#1b1c19]">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs font-bold text-[#6b5d3e]">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-0 hidden w-full bg-[#213426] lg:block">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-8 py-20 md:flex-row">
          <div className="max-w-sm space-y-6">
            <div className="font-serif text-3xl text-[#efeee9]">SafMebel</div>
            <p className="text-sm leading-7 text-[#efeee9]/70">
              Crafting legacies through sustainable furniture design, honoring the forest
              with every cut.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</p>
              <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-[#efeee9]/70">
                <a href="#" className="transition hover:text-white">
                  Sustainability
                </a>
                <a href="#" className="transition hover:text-white">
                  Craftsmanship
                </a>
                <a href="#" className="transition hover:text-white">
                  Materials
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Connect</p>
              <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-[#efeee9]/70">
                <a href="#" className="transition hover:text-white">
                  Journal
                </a>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Social</p>
              <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.18em] text-[#efeee9]/70">
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
                <a href="#" className="transition hover:text-white">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-white/5 px-8 py-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#efeee9]/40">
            © 2024 SafMebel. Crafted with Forest Heritage.
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/5 bg-[#faf9f4]/95 px-4 pb-6 pt-4 backdrop-blur-2xl lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-4">
          <div className="flex h-14 items-center rounded-full bg-[#e9e8e3] px-2">
            <button
              onClick={decrease}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="w-8 text-center text-lg font-bold">{quantity}</span>

            <button
              onClick={increase}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#0c1f12] px-6 font-bold tracking-wide text-white transition active:scale-[0.98]">
            Add to Cart
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto flex max-w-md items-center justify-around rounded-t-3xl bg-[#faf9f4]/80 px-4 pb-6 pt-3 opacity-0 backdrop-blur-xl md:hidden">
        <div className="flex flex-col items-center justify-center rounded-full bg-[#213426] px-5 py-2 text-[#faf9f4]">
          <Store className="h-5 w-5" />
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em]">Shop</span>
        </div>

        <div className="flex flex-col items-center justify-center px-5 py-2 text-[#6b5d3e]">
          <Search className="h-5 w-5" />
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em]">
            Search
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-5 py-2 text-[#6b5d3e]">
          <ShoppingCart className="h-5 w-5" />
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em]">
            Cart
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-5 py-2 text-[#6b5d3e]">
          <User className="h-5 w-5" />
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em]">
            Profile
          </span>
        </div>
      </nav>
    </div>
  );
}