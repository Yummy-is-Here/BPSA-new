"use client";
import { Stat } from "@/components/Stat";
export default function StatsSection() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-around gap-8 px-4">
        <Stat title="Roků zkušeností" target={17} />
        <Stat title="Objekty ve správě" target={350} />
        <Stat title="Profesionálů v týmu" target={500} />
      </div>
    </section>
  );
}
