import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brijesh Chandrakar — योगः कर्मसु कौशलम्",
  description: "Brijesh Chandrakar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${notoDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
