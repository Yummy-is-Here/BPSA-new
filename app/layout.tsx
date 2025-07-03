import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });

export const metadata = {
  title: "BPSA Facility Management",
  description: "Kompletní facility management pod jednou střechou",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <Navbar />
        <main className="mt-[64px]">{children}</main>
      </body>
    </html>
  );
}
