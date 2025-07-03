import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex items-center justify-center h-[75vh] bg-[url('/hero.jpg')] bg-cover bg-center">
      <span className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Kompletní&nbsp;facility&nbsp;management <br/> pod jednou&nbsp;střechou
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Zabezpečíme, uklidíme a postaráme se o vaši nemovitost — spolehlivě a bez kompromisů.
        </p>
        <Link
          href="#kontakt"
          className="mt-8 inline-block rounded-2xl px-8 py-3 font-semibold bg-highlight-500 text-gray-900 hover:bg-highlight-400 transition"
        >
          Nezávazná poptávka
        </Link>
      </motion.div>
    </section>
  );
}
