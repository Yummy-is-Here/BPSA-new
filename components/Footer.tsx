export default function Footer() {
  return (
    <footer className="bg-primary-600 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} BPSA s.r.o.</p>
        <p className="text-sm">
          Vyrobil&nbsp;
          <a href="https://github.com/your_username" target="_blank" className="underline">
            Tvé&nbsp;Jméno
          </a>
        </p>
      </div>
    </footer>
  );
}
