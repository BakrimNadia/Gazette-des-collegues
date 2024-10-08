'use client';

import { Avatar } from "@nextui-org/react";
import CardHome from "./Components/CardHome";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="items-center justify-center">
      <h1 className="text-4xl font-extrabold text-center relative inline-block text-black p-3">
        Bienvenue dans notre blog d&apos;entreprise
      </h1>
      <div>
        <h2 className="text-xl font-extrabold text-center relative inline-block text-black p-3">
          Vous trouverez infos / articles / petites annonces
        </h2>
      </div>
      <section className="relative h-[400px]"> 
        <Image
          src="/images/133719.jpg"
          alt="personnes travaillant"
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
        />
      </section>
      <section className="mt-8 justify-center items-center">
        <CardHome />
      </section>
      <section className="mt-8 justify-center items-center">
        <div className="mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">Notre équipe de rédacteurs bénévoles</h2>
        <p className="mt-2 text-lg text-center font-bold leading-8 text-gray-600">
          Nos collègues rédacteurs se relaient pour vous proposer des articles de qualité et 
          vous partager les informations utiles de l&apos;entreprise, le tout dans un esprit de partage et de convivialité.
          De plus, nous avons mis en place un système de petites annonces pour vous permettre de vendre ou d&apos;acheter des objets entre collègues, et même echanger ou proposer des services.
          Pour partager une annonces, il suffit de nous contacter via le formulaire de contact. <br />
        </p>
        </div>
      <div className="flex gap-4 justify-center items-center mb-8">
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
      <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
    </div>
      </section>
    </div>
  );
}