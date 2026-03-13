import type { Metadata } from "next";
import {
  Manrope,
  Mrs_Saint_Delafield,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Sof Mebel | Premium mebel showroom",
  description:
    "Sof Mebel bilan uyingiz uchun zamonaviy va sifatli mebellarni kashf eting.",
};

const brandFont = Mrs_Saint_Delafield({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrumental-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='uz'>
      <Head>
        {/* Basic Meta Tags */}
        <title>SOFMebel – Premium Uy va ofis uchun premuim mebel</title>
        <meta
          name='description'
          content='SOF Mebel offers high-quality furniture for your home and office. Explore our collection of modern sofas, chairs, tables, and more.'
        />
        <meta
          name='keywords'
          content='furniture, sofas, chairs, tables, home furniture, office furniture, interior design, modern furniture'
        />
        <meta name='author' content='SOF Mebel' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link rel='icon' href='/favicon.ico' />

        <meta
          property='og:title'
          content='SOF Mebel – Premium Furniture for Home & Office'
        />
        <meta
          property='og:description'
          content='Discover high-quality furniture for your home and office at SOF Mebel. Modern, stylish, and durable.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sofmebel.vercel.app/' />
        <meta
          property='og:image'
          content='https://sofmebel.vercel.app/og-image.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='SOF Mebel – Premium Furniture for Home & Office'
        />
        <meta
          name='twitter:description'
          content="Explore SOF Mebel's collection of modern furniture for home and office. Stylish and durable designs."
        />
        <meta
          name='twitter:image'
          content='https://sofmebel.vercel.app/og-image.jpg'
        />

        <meta name='robots' content='index, follow' />
      </Head>
      <body
        className={`antialiased ${brandFont.variable} ${instrumentSerif.variable} ${manrope.className}`}
      >
        {children}
      </body>
    </html>
  );
}
