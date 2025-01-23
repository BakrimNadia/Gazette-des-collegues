import { Link } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

export default function Footer() {  
    return (
        <footer className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-center p-4">
        <p className="text-white">© 2024 tous droits réservés</p>
        <p className="font-bold text-white">Suivez-nous sur les réseaux</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-6 h-6 text-white"/>
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-6 h-6 text-white"/>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 text-white"/>
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <Twitter className="w-6 h-6 text-white"/>
          </Link>
        </div>
      </footer>
    );
}