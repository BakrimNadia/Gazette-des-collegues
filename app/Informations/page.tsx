'use client';

import CardInformations from "../Components/CardInformations";
import { INews } from "@/@types/news";
import { actionThunkNewsList } from "@/lib/thunks/news.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loader from "../Components/Loader";


export default function Informations() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching action to fetch news");
    dispatch(actionThunkNewsList());
  }, [dispatch]);

  const news: INews[] = useAppSelector((state) => state.news.newsList);
  console.log(news);

  const userRole = useAppSelector((state) => state.auth.role); 
  const hasAccess = userRole === "Admin" || userRole === "Rédacteur";

  const isLoading = useAppSelector((state) => state.news.isloading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-extrabold text-center relative inline-block text-gray-700 mt-3 p-3">
          Notes et Informations importantes
        </h1>
      </div>
      <p className="text-3xl text-center mt-4">
        Vous trouverez ici les notes et informations utiles concernant l&apos;entreprise
      </p>
      <div className="mt-4 mb-4 mx-8 p-2 border border-current rounded-lg shadow-xl">
        <p className="text-lg text-center mb-4 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Qui consequuntur quae molestias repellat dolore magnam dolorem, enim dignissimos 
            commodi! Velit esse, eligendi asperiores saepe minima odit laboriosam! Non, culpa? 
            Repellat praesentium quod asperiores ipsa necessitatibus laboriosam tenetur dolores deserunt, 
            voluptate veniam voluptates ad exercitationem minima, tempore cupiditate reprehenderit ducimus cumque.</p>
      </div>
      <section className="mt-8 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
      {news.map((newsItem) => {
        return <CardInformations key={newsItem.id} newItem={newsItem} />;
      })}
      </section>
      {hasAccess && (
      <div className="mb-10">
      <a 
      href="/Edit-information"
      className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5"
      >Editer une information</a>
      </div>
      )}
    </div>
  );
}