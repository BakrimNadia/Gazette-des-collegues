'use client';

import CardInformations from "../Components/CardInformations";
import { INews } from "@/@types/news";
import { actionThunkNewsList } from "@/lib/thunks/news.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from "@nextui-org/react";


export default function Informations() {
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredNews = news.filter((newsItem) => {
    const matchesSearchTerm = newsItem.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearchTerm;
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
      <h1 className="mt-10 !text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mb-8"
        style={{
          animation: "textSlide 5s ease-out forwards",
          background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          backgroundClip: "text", 
          color: "black", 
        }}
        >
         Informations importantes et notes de service
        </h1>
      </div>
      <div className="mt-4 mb-4 mx-2 p-2 border-current rounded-lg shadow-xl bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9]">
        <p className="text-lg text-center font-bold mb-4 mt-4">Vous trouverez ici les notes de service et informations utiles concernant l&apos;entreprise, merci de bien en tenir compte, nous nous efforçons de publier rapidement pour que vous puissiez être informés à temps. </p>
        <Input
        label="Rechercher une information"
        isClearable
        radius="lg"
        classNames={{
          label: "font-bold text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="saisissez un mot clé..."
        startContent={
          <MagnifyingGlassIcon
          className="h-5 w-5 text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <section className="mt-8 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
      {filteredNews.map((newsItem) => {
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