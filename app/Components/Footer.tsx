import { Link } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-800 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Section Liens */}
        <div className="flex flex-col md:flex-row md:space-x-8 items-center text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/informations" className="hover:text-white">Informations</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/annonces" className="hover:text-white">Petites annonces</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="text-center">
          <p className="text-sm font-semibold mb-2">Suivez-nous</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-400" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-400" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-300" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-sky-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-gray-400">
        © 2024 La Gazette des Collègues — Tous droits réservés
      </div>
    </footer>
  );
}
