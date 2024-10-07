'use client';

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
      <section className="mt-8 flex justify-center items-center">
        <CardHome />
      </section>
    </div>
  );
}