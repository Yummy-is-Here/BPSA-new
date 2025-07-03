import Image from "next/image";

const logos = [
  { src: "/clients/tesco.svg", alt: "Tesco" },
  { src: "/clients/skoda.svg", alt: "Škoda" },
  { src: "/clients/o2.svg", alt: "O2" },
  { src: "/clients/unicredit.svg", alt: "UniCredit Bank" },
  { src: "/clients/cez.svg", alt: "ČEZ" },
];

export default function Clients() {
  return (
    <section id="reference" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Důvěřují nám</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-80">
          {logos.map(({ src, alt }) => (
            <Image key={alt} src={src} alt={alt} width={120} height={60} />
          ))}
        </div>
      </div>
    </section>
  );
}
