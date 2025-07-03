import { ShieldCheck, Sparkles, Building } from "lucide-react";

const services = [
  {
    name: "Fyzická ostraha",
    icon: ShieldCheck,
    desc: "Licencovaní strážní, dohled 24/7 a moderní technologie.",
  },
  {
    name: "Úklid a údržba",
    icon: Sparkles,
    desc: "Denní i generální úklid, green-chemie a audit hygieny.",
  },
  {
    name: "Facility management",
    icon: Building,
    desc: "Komplexní správa budov, revize a energetický management.",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Naše služby</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Kompletní balíček bezpečnostních a úklidových služeb.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map(({ name, icon: Icon, desc }) => (
            <div
              key={name}
              className="rounded-2xl bg-white dark:bg-gray-950 p-8 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <Icon className="h-10 w-10 text-secondary-500 mx-auto" />
              <h3 className="mt-4 font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
