'use client';

import CardAnnonce from "../Components/CardAnnonce";

export default function Annonces() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-extrabold text-center relative inline-block text-black p-3">
          Nos Petites annonces
        </h1>
      </div>
      <p className="text-3xl text-center mt-4">
        Partageons nos petites annonces entre collègues
      </p>
      <div className="mt-4 mx-8 p-2 border border-current rounded-lg shadow-xl">
        <p className="text-lg text-center mb-4 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui consequuntur quae molestias repellat dolore magnam dolorem, enim dignissimos 
            commodi! Velit esse, eligendi asperiores saepe minima odit laboriosam! Non, culpa? 
            Repellat praesentium quod asperiores ipsa necessitatibus laboriosam tenetur dolores deserunt, 
            voluptate veniam voluptates ad exercitationem minima, tempore cupiditate reprehenderit ducimus cumque.</p>
      </div>
      <section className="mt-8 w-full">
        <CardAnnonce/>
      </section>
    </div>
  );
}