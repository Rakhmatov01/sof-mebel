import type { Metadata } from "next";
import {
  Manrope,
  Mrs_Saint_Delafield,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sof Mebel | Premium mebel showroom",
  description:
    "Sof Mebel bilan uyingiz uchun zamonaviy va sifatli mebellarni kashf eting.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
    <html lang="uz">
      <body
        className={`antialiased ${brandFont.variable} ${instrumentSerif.variable} ${manrope.className}`}
      >
        {children}
      </body>
    </html>
  );
}