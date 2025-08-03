"use client";

import CardProfilNews from "../Components/CardProfilNews";
import CardProfilArticles from "../Components/CardProfilArticles";
import CardProfilAnnouncements from "../Components/CardProfilAnnouncements";
import { INews } from "@/@types/news";
import { IArticle } from "@/@types/article";
import { IAnnouncement } from "@/@types/announcement";
import { actionThunkNewsList } from "@/lib/thunks/news.thunk";
import { actionThunkArticleList } from "@/lib/thunks/article.thunk";
import { actionThunkAnnouncementList } from "@/lib/thunks/announcement.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import { getTokenAndPseudoFromLocalStorage } from "@/localStorage/localStorage";
import { actionLogIn } from "@/lib/actions/auth.action";
import { addTokenJwtToAxiosInstance } from "@/lib/axios/axios";
import { Card, Image } from "@nextui-org/react";

export default function Profil() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionThunkNewsList());
    dispatch(actionThunkArticleList());
    dispatch(actionThunkAnnouncementList());
  }, [dispatch]);

  useEffect(() => {
    const { jwt, pseudo, role, avatar } = getTokenAndPseudoFromLocalStorage();
    if (jwt) {
      dispatch(actionLogIn({ jwt, pseudo, role, avatar }));
      addTokenJwtToAxiosInstance(jwt);
    }
  }, [dispatch]);

  const pseudo = useAppSelector((state) => state.auth.pseudo);
  const role = useAppSelector((state) => state.auth.role);
  const avatar = useAppSelector((state) => state.auth.avatar);

  const news: INews[] = useAppSelector((state) => state.news.newsList);
  const articles: IArticle[] = useAppSelector((state) => state.article.articleList);
  const announcements: IAnnouncement[] = useAppSelector((state) => state.announcement.announcementList);
  const isLoading = useAppSelector((state) => state.news.isloading);

  if (!pseudo) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center font-bold text-xl">
        Vous devez être connecté pour accéder à cette page
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pb-8">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-8 text-gray-700 tracking-tight">
        Mon profil
      </h1>

      {/* Infos personnelles */}
      <section className="w-full max-w-2xl mt-6 flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Mes informations personnelles</h2>
        <Card className="rounded-full p-1 shadow-xl flex justify-center items-center mx-auto">
          <Image
            alt={pseudo}
            className="object-cover w-36 h-36 rounded-full border-4 border-[#D4AF37] shadow-lg"
            src={avatar}
          />
        </Card>
        <div className="w-full overflow-x-auto flex justify-center">
          <table className="min-w-[320px] w-full text-left border mt-6 rounded-lg overflow-hidden bg-white shadow mx-auto">
            <thead className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9]">
              <tr>
                <th className="px-4 py-2 text-xs font-bold text-white uppercase">Champ</th>
                <th className="px-4 py-2 text-xs font-bold text-white uppercase">Valeur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="px-4 py-2 font-semibold">Nom Prénom</td>
                <td className="px-4 py-2">{pseudo}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Rôle</td>
                <td className="px-4 py-2">{role}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-6 py-2 rounded-lg mt-4 shadow hover:scale-105 transition">
          Modifier
        </button>
      </section>

      {/* Redactions */}
      <section className="w-full max-w-6xl px-2 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Mes publications</h2>
        
        {/* News */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-center">Informations publiées</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {news
              .filter(
                (newsItem) =>
                  `${newsItem.newsAuthor.firstname} ${newsItem.newsAuthor.lastname}` === pseudo
              )
              .map((newsItem) => (
                <CardProfilNews key={newsItem.id} newItem={newsItem} />
              ))}
          </div>
        </div>

        {/* Articles */}
        <div className="mt-10">
          <h3 className="font-bold text-lg mb-3 text-center">Articles publiés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {articles
              .filter(
                (articleItem) =>
                  `${articleItem.articleAuthor.firstname} ${articleItem.articleAuthor.lastname}` === pseudo
              )
              .map((articleItem) => (
                <CardProfilArticles key={articleItem.id} articleItem={articleItem} />
              ))}
          </div>
        </div>

        {/* Annonces */}
        <div className="mt-10">
          <h3 className="font-bold text-lg mb-3 text-center">Annonces publiées</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
            {announcements
              .filter((announcementItem) => `${announcementItem.author}` === pseudo)
              .map((announcementItem) => (
                <CardProfilAnnouncements key={announcementItem.id} announcementItem={announcementItem} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
