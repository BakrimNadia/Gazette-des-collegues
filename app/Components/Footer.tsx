import { Link } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-12 pb-6 px-4 md:px-8 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/logo.svg"
            alt="La Gazette des Collègues"
            className="w-16 h-16 mb-3 rounded-full shadow-lg bg-white p-2"
          />
          <span className="font-extrabold text-lg tracking-tight">La Gazette des Collègues</span>
          <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
            L’info, les actus et les petites annonces pour les PME et les collègues.
          </p>
        </div>

        {/* Liens de navigation */}
        <div className="flex flex-col gap-2 items-center md:items-start text-white">
          <span className="font-semibold text-[#D4AF37] mb-1">Navigation</span>
          <Link href="/" className="text-white hover:text-[#D4AF37] transition-colors">Accueil</Link>
          <Link href="/faq" className="text-white hover:text-[#D4AF37] transition-colors">FAQ</Link>
          <Link href="/informations" className="text-white hover:text-[#D4AF37] transition-colors">Informations</Link>
          <Link href="/blog" className="text-white hover:text-[#D4AF37] transition-colors">Blog</Link>
          <Link href="/annonces" className="text-white hover:text-[#D4AF37] transition-colors">Petites annonces</Link>
          <Link href="/contact" className="text-white hover:text-[#D4AF37] transition-colors">Contact</Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-semibold text-[#D4AF37] mb-1">Réseaux sociaux</span>
          <div className="flex gap-3 mt-1">
            <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 text-white hover:text-[#D4AF37] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Infos contact */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold text-[#D4AF37] mb-1">Contact</span>
          <span className="text-gray-300 text-sm">📍 123 Avenue du Travail, 75000 Paris</span>
          <span className="text-gray-300 text-sm">✉️ contact@gazettecollegues.fr</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-xs text-gray-500 border-t border-gray-800 pt-5">
        © 2024 La Gazette des Collègues — Tous droits réservés
      </div>
    </footer>
  );
}
