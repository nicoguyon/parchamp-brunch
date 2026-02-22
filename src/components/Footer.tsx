export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">

      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-12 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase mb-4">Brunch du Dimanche</p>
            <h3 className="font-serif text-2xl text-white mb-4">Le Parchamp</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Tribute Portfolio · Marriott<br />
              Boulogne-Billancourt
            </p>
          </div>

          {/* Horaires & infos */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Informations</p>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex gap-3">
                <span className="text-[#C5A572]">◈</span>
                <span>Tous les dimanches, 12h – 15h</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A572]">◈</span>
                <span>114–116 Route de la Reine, 92100 Boulogne-Billancourt</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A572]">◈</span>
                <a href="tel:+33181890680" className="hover:text-white transition-colors">+33 1 81 89 06 80</a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C5A572]">◈</span>
                <a href="mailto:restaurant@leparchamp.com" className="hover:text-white transition-colors">restaurant@leparchamp.com</a>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Liens</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.leparchamp.com/eat-drink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#C5A572] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#C65D3E] text-xs">→</span>
                  Réserver une table
                </a>
              </li>
              <li>
                <a
                  href="https://www.leparchamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#C5A572] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#C65D3E] text-xs">→</span>
                  leparchamp.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/leparchamp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#C5A572] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#C65D3E] text-xs">→</span>
                  Instagram @leparchamp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-white/30 text-base italic">
            Un dimanche bien choisi.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Le Parchamp · Tribute Portfolio · Marriott
          </p>
        </div>
      </div>
    </footer>
  );
}
