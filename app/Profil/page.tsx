"use client";

import CardProfilNews from "../Components/CardProfilNews";
import CardProfilArticles from "../Components/CardProfilArticles";
import { INews } from "@/@types/news";
import {IArticle} from "@/@types/article";
import { actionThunkNewsList } from "@/lib/thunks/news.thunk";
import { actionThunkArticleList } from "@/lib/thunks/article.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loader from "../Components/Loader";

export default function Profil() {
    const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching action to fetch news");
    dispatch(actionThunkNewsList());
    dispatch(actionThunkArticleList());
  }, [dispatch]);

  const news: INews[] = useAppSelector((state) => state.news.newsList);
  console.log(news);

    const articles: IArticle[] = useAppSelector((state) => state.article.articleList);
    console.log(articles);

    const isLoading = useAppSelector((state) => state.news.isloading);
  
    if (isLoading) {
      return <Loader />;
    }
  

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div>
                <h1 className="text-4xl font-extrabold text-center relative inline-block text-gray-700 mt-5">
                    Mon profil
                </h1>
            </div>
            <h2 className="text-3xl text-center mt-4">Mes informations personnelles</h2>
            <table className="mt-10 divide-gray-300 px-5 border">
                <thead className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Mes infos
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Nom</td>
                        <td className="px-6 py-4 whitespace-nowrap">Doe</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Prénom</td>
                        <td className="px-6 py-4 whitespace-nowrap">John</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Email</td>
                        <td className="px-6 py-4 whitespace-nowrap">abcd@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Role</td>
                        <td className="px-6 py-4 whitespace-nowrap">Employé</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-10">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5">Modifier</button>
            </div>
            <h2 className="text-3xl text-center mt-4">Mes redactions</h2>
            <div className="mt-10 mb-10">
            <h3 className="text-center font-bold mb-10">Informations publiées</h3>
            <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                {news.map((newsItem) => {
                        return <CardProfilNews key={newsItem.id} newItem={newsItem} />;
                      })}
            </div>
            <h3 className="text-center font-bold mb-10">Articles publiées</h3>
            <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            
            {news.map((newsItem) => {
                        return <CardProfilArticles key={newsItem.id} newItem={newsItem} />;
                      })}
            </div>
            <div className="mt-10 mb-10">
            <h3 className="text-center font-bold mb-10">Annonces publiées</h3>
                mes annonces
            </div>
            </div>
        </div>
    );
}