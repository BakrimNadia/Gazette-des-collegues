'use client';

import { motion } from 'framer-motion';

// Remplace par ton image, ou mets une image d'entreprise/photo d'équipe/ville
const HERO_IMAGE = '/images/entreprise-hero.jpg'; 

export default function Hero() {
  return (
    <section className="relative w-full flex justify-center py-8 px-2">
      <div
        className="
          relative
          w-full max-w-6xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
          border border-white/60
          bg-white/10
          backdrop-blur-md
          mx-auto
        "
        style={{ minHeight: '550px', maxHeight: '90vh' }}
      >
        {/* --- BG Image (ou vidéo) --- */}
        <img
          src={HERO_IMAGE}
          alt="Bureau collaboratif"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* --- SVG décoratif : buildings + équipe --- */}
        <div className="absolute right-0 top-0 z-10 opacity-80 hidden md:block">
          {/* SVG corporate stylisé */}
          <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="40" width="35" height="90" rx="8" fill="#D4AF37" fillOpacity="0.12" />
            <rect x="130" y="65" width="25" height="65" rx="7" fill="#A9A9A9" fillOpacity="0.12" />
            <rect x="165" y="80" width="35" height="50" rx="7" fill="#D4AF37" fillOpacity="0.14" />
            {/* silhouettes d'équipe */}
            <ellipse cx="100" cy="130" rx="8" ry="10" fill="#fff" fillOpacity="0.30"/>
            <ellipse cx="125" cy="138" rx="6" ry="8" fill="#fff" fillOpacity="0.18"/>
            <ellipse cx="175" cy="140" rx="7" ry="8" fill="#fff" fillOpacity="0.25"/>
            <circle cx="100" cy="120" r="5" fill="#A9A9A9" fillOpacity="0.20"/>
            <circle cx="125" cy="130" r="4" fill="#D4AF37" fillOpacity="0.20"/>
            <circle cx="175" cy="132" r="4.5" fill="#A9A9A9" fillOpacity="0.22"/>
          </svg>
        </div>
        {/* Vecteur décoratif en bas à gauche */}
        <div className="absolute left-0 bottom-0 z-10 opacity-90">
          <svg width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="50" rx="60" ry="15" fill="#D4AF37" fillOpacity="0.19" />
            <ellipse cx="110" cy="56" rx="20" ry="6" fill="#A9A9A9" fillOpacity="0.11" />
          </svg>
        </div>

        {/* --- Texte & Animation --- */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 py-16 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center drop-shadow-lg"
            style={{
              background: 'linear-gradient(to right, #D4AF37, #A9A9A9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            La Gazette des collègues
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-2xl text-center"
          >
            Le blog interne, espace d’information, d’annonces et d’actualités pour toute l’entreprise.
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="block font-semibold text-[#D4AF37] mt-2"
            >
              Grandir ensemble, partager chaque jour.
            </motion.span>
          </motion.p>
        </div>

        {/* --- Petite flèche animée en bas pour scroller --- */}
        <a
          href="#presentation"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20"
          aria-label="Descendre à la section suivante"
        >
          <motion.div
            initial={{ y: 0, opacity: 0.7 }}
            animate={{
              y: [0, 14, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <svg width="34" height="34" viewBox="0 0 34 34" className="mx-auto">
              <circle cx="17" cy="17" r="16" fill="#D4AF37" fillOpacity="0.09"/>
              <polyline points="11,15 17,23 23,15" fill="none" stroke="#D4AF37" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
