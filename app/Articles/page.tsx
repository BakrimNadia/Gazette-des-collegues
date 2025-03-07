'use client';

import CardArticle from "../Components/CardArticle";
import { IArticle } from "@/@types/article";
import { actionThunkArticleList } from "@/lib/thunks/article.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Articles() {
  const dispatch = useAppDispatch();

   const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Dispatching action to fetch article");
    dispatch(actionThunkArticleList());
  }, [dispatch]);

  const article: IArticle[] = useAppSelector((state) => state.article.articleList);
  console.log(article);

  const userRole = useAppSelector((state) => state.auth.role); 
  const hasAccess = userRole === "Admin" || userRole === "Rédacteur";

  const isLoading = useAppSelector((state) => state.article.isloading);

  if (isLoading) {
    return <Loader />;
  }

  const filteredArticles = article.filter((articleItem) => {
  const matchesSearchTerm = articleItem.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearchTerm;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/images/journal.jpg" alt="monde journal" />
      <div>
      <h1 className="mt-10 text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mb-8"
        style={{
          animation: "fadeInUp 1.5s ease-out forwards",
          background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          backgroundClip: "text", 
          color: "black", 
        }}
        >
         <span>Le blog</span> <br/>Articles rédigés par nos rédacteurs
        </h1>
      </div>
      <div className="mt-4 mx-8 p-2 border-current rounded-lg shadow-xl bg-gradient-to-r from-[#D3D3D3] to-[#B0EACD]">
        <p className="text-lg font-bold text-center mb-4 mt-4 mx-2">Voici quelques articles qui pourraient vous intéresser, notre équipe de rédacteur vous publie chaque semaines des articles d&apos;actualités intéressants. N&apos;hésitez pas à nous suggerer des articles et à les envoyer via notre formulaire de contact</p>
        <Input
        label="Rechercher un article"
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
      <section className="mt-8 mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mb-10">
      {filteredArticles.map((articleItem) => {
        return <CardArticle key={articleItem.id} articleItem={articleItem} />;
      })}
      </section>
      {hasAccess && (
      <div className="mt-10 mb-10">
      <a 
      href="/Edit-article"
      className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5"
      >Editer un article</a>
      </div>
      )}
    </div>
  );
}