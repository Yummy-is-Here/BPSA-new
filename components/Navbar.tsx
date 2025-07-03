"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/nahradni-plneni", label: "Náhradní plnění" },
  { href: "/reference", label: "Reference" },
  { href: "https://bpsa-prace.cz", label: "Volné pozice", external: true },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/70 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-heading font-bold text-xl text-primary-600">
          BPSA
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ href, label, external }) => (
            <Link
              key={href}
              href={href}
              target={external ? "_blank" : undefined}
              className="text-sm hover:text-secondary-500 transition"
            >
              {label} {external && "↗"}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 shadow-inner"
          >
            <ul className="flex flex-col py-2">
              {navLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    {label} {external && "↗"}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
