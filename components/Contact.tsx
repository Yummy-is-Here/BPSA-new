import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center">Kontaktujte nás</h2>
        <form action="/api/contact" method="POST" className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Jméno a příjmení"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="E‑mail"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <textarea
            name="message"
            placeholder="Jak vám můžeme pomoci?"
            rows={4}
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
          <Button type="submit" className="w-full">
            Odeslat poptávku
          </Button>
        </form>
      </div>
    </section>
  );
}
