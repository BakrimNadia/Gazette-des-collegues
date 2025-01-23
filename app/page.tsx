'use client';

import { Avatar } from "@nextui-org/react";
import CardHome from "./Components/CardHome";
import Image from 'next/image';
import Newsletter from "./Components/newsletter";

export default function Home() {
  return ( 
  <div>
        <div className="mt-10"> 
          <div className="items-center text-center justify-center">
          <h1
            className="text-6xl font-extrabold text-center relative inline-block p-3 mb-4 gradient-text">
            Bienvenue dans notre blog d&apos;entreprise
          </h1>
        </div>
          <Image
            src="/images/logoGC.png"
            alt="logo de la gazette des collègues"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Image
            src="/images/Lagazette.png"
            alt="logo de la gazette des collègues"
            width={600}
            height={600}
            className="mx-auto"
          />
   
        <h2 className="text-3xl font-bold font-sans tracking-tight text-center text-gray-600 sm:text-3xl mb-8">
          Un site de partage d&apos;infos / d&apos;articles / de petites annonces en interne
        </h2>
      </div>
      <section className="relative h-[600px]"> 
        <Image
          src="/images/collegues-gazette.png"
          alt="personnes travaillant"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          fill
        />
      </section>
      <section className="w-full mt-10 justify-center items-center">
      <div>
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
      </div>
        <CardHome />
      </section>
      <section className="mt-8 justify-center items-center">
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
        >Notre équipe de rédacteurs bénévoles</h2>
        <p className="mt-6 text-lg text-center font-bold leading-8 text-gray-600 mx-6">
          Nos collègues rédacteurs se relaient pour vous proposer des articles de qualité et 
          vous partager les informations utiles de l&apos;entreprise, le tout dans un esprit de partage et de convivialité.
          De plus, nous avons mis en place un système de petites annonces pour vous permettre de vendre ou d&apos;acheter des objets entre collègues, et même echanger ou proposer des services.
          Pour partager une annonces, il suffit de nous contacter via le formulaire de contact. <br />
        </p>
        </div>
      <div className="flex gap-4 justify-center items-center mt-10">
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </div>
      </section>
      <section className="justify-center items-center">
        <Newsletter />
        </section>
    </div>
  );
}