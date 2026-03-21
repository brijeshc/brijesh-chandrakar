import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brijesh Chandrakar",
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
        className={`${outfit.variable} ${lora.variable} font-sans antialiased bg-sandstone-50 text-charcoal-900 selection:bg-saffron-400/30 selection:text-charcoal-900`}
      >
        {children}
      </body>
    </html>
  );
}
