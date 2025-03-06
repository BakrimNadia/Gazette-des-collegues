'use client';

import { Avatar } from "@nextui-org/react";
import CardHome from "./Components/CardHome";
import Newsletter from "./Components/newsletter";

export default function Home() {
  return ( 
    <div>
      {/* Section vidéo + H1 */}
      <section className="relative w-full h-96">
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/immeuble.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        {/* Texte au-dessus de la vidéo */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4">
  <h1 
    className="text-5xl md:text-4xl sm:text-2xl font-bold tracking-tight item-center justify-center text-center mb-8"
    style={{
      animation: "textSlide 5s ease-out forwards",
      background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent", 
      backgroundClip: "text", 
      color: "black",
    }}
  >
    <span className="block text-4xl md:text-4xl sm:text-2xl pt-2 mt-2">La Gazette des collègues</span> 
    <br /> 
    <span className="text-3xl md:text-3xl sm:text-xl">
      Partage d&apos;informations internes, d&apos;articles et de petites annonces entre collègues
    </span>
  </h1>
</div>
      </section>

      {/* Contenu en dessous de la vidéo */}
      <section className="w-full mt-10 flex flex-col items-center">
        <h2 className="text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mb-8"
          style={{
            animation: "textSlide 5s ease-out forwards",
            background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            backgroundClip: "text", 
            color: "black",
          }}
        >
          Parcourez nos différentes rubriques
        </h2>
        <CardHome />
      </section>

      {/* Section équipe */}
      <section className="mt-8 flex flex-col items-center">
        <div className="mb-4">
          <h2 className="text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mt-6"
            style={{
              animation: "textSlide 5s ease-out forwards",
              background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text", 
              color: "black",
            }}
          >
            Notre équipe de rédacteurs bénévoles
          </h2>
          <p className="mt-6 text-lg text-center font-semibold leading-8 text-gray-600 mx-6">
            Nos collègues rédacteurs se relaient pour vous proposer des articles de qualité et 
            vous partager les informations utiles de l&apos;entreprise, le tout dans un esprit de partage et de convivialité.
            De plus, nous avons mis en place un système de petites annonces pour vous permettre de vendre ou d&apos;acheter des objets entre collègues, et même échanger ou proposer des services.
            Pour partager une annonce, il suffit de nous contacter via le formulaire de contact.
          </p>
        </div>

        {/* Avatars */}
        <div className="flex gap-4 justify-center items-center mt-10">
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="flex justify-center items-center mt-10">
        <Newsletter />
      </section>
    </div>
  );
}
