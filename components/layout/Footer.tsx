'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-off-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left column - Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Dott. Francesco Baldi
            </h3>
            <p className="text-sm font-sans text-sage">
              Osteopata · Fisioterapista
            </p>
            <p className="text-xs font-sans text-muted mt-6 leading-relaxed">
              Specializzato in Osteopatia e Fisioterapia Manuale con approccio
              olistico al benessere dei pazienti.
            </p>
          </div>

          {/* Center column - Pages links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-sage">
              Pagine
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm font-sans hover:text-sage transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/servizi"
                  className="text-sm font-sans hover:text-sage transition-colors duration-200"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="/chi-sono"
                  className="text-sm font-sans hover:text-sage transition-colors duration-200"
                >
                  Chi Sono
                </a>
              </li>
              <li>
                <a
                  href="/contatti"
                  className="text-sm font-sans hover:text-sage transition-colors duration-200"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Right column - Contact info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-sage">
              Contatti
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-sans text-muted uppercase tracking-wide mb-1">
                  Indirizzo
                </p>
                <p className="text-sm font-sans leading-relaxed">
                  Via Cesare Battisti 91, Modugno (BA)
                </p>
              </div>
              <div>
                <p className="text-xs font-sans text-muted uppercase tracking-wide mb-1">
                  Telefono
                </p>
                <a
                  href="tel:+393286674420"
                  className="text-sm font-sans hover:text-sage transition-colors duration-200"
                >
                  328 667 4420
                </a>
              </div>
              <div>
                <p className="text-xs font-sans text-muted uppercase tracking-wide mb-2">
                  Orari
                </p>
                <p className="text-sm font-sans leading-relaxed">
                  Lun–Ven
                  <br />
                  08:30 – 13:00
                  <br />
                  15:00 – 20:30
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sage border-opacity-20"></div>

        {/* Bottom section - Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs font-sans text-muted">
            © {currentYear} Dott. Francesco Baldi. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
