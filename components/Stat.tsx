"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Stat({ title, target }: { title: string; target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
      >
        <motion.span
          initial={{ counter: 0 }}
          animate={{ counter: isInView ? target : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {({ counter }) => Math.round(counter as number)}
        </motion.span>
        +
      </motion.p>
      <p className="mt-1 text-sm md:text-base">{title}</p>
    </div>
  );
}
