"use client";

import CardProfilNews from "../Components/CardProfilNews";
import CardProfilArticles from "../Components/CardProfilArticles";
import { INews } from "@/@types/news";
import {IArticle} from "@/@types/article";
import { IAnnouncement } from "@/@types/announcement";
import { actionThunkNewsList } from "@/lib/thunks/news.thunk";
import { actionThunkArticleList } from "@/lib/thunks/article.thunk";
import { actionThunkAnnouncementList } from "@/lib/thunks/announcement.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loader from "../Components/Loader";
import CardProfilAnnouncements from "../Components/CardProfilAnnouncements";
import { getTokenAndPseudoFromLocalStorage } from "@/localStorage/localStorage";
import { actionLogIn } from "@/lib/actions/auth.action";
import { addTokenJwtToAxiosInstance } from "@/lib/axios/axios";
import  {Card, Image,CardBody } from "@nextui-org/react";


export default function Profil() {
    const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching action to fetch news");
    dispatch(actionThunkNewsList());
    dispatch(actionThunkArticleList());
    dispatch(actionThunkAnnouncementList());
  }, [dispatch]);

   useEffect(() => {
          const { jwt, pseudo, role, avatar } = getTokenAndPseudoFromLocalStorage();
          if (jwt) {
            dispatch(actionLogIn({ jwt, pseudo, role, avatar }));
            addTokenJwtToAxiosInstance(jwt);
          } else {
            console.log('rien dans le localstorage');
          }
        }, [dispatch]);

const pseudo = useAppSelector((state) => state.auth.pseudo);
const role = useAppSelector((state) => state.auth.role);
const avatar = useAppSelector((state) => state.auth.avatar);


    const news: INews[] = useAppSelector((state) => state.news.newsList);
    console.log(news);

    const articles: IArticle[] = useAppSelector((state) => state.article.articleList);
    console.log(articles);

    const announcements: IAnnouncement[] = useAppSelector((state) => state.announcement.announcementList);
    console.log(announcements);

    const isLoading = useAppSelector((state) => state.news.isloading);

    if (!pseudo) {
      return <div className="text-center font-bold text-xl mt-10 mb-10">Vous devez être connecté pour accéder à cette page</div>;
    }
    else{

    }
  
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
            <div>
        <Card className="mx-2 mt-10"  shadow="sm">       
        <CardBody className="overflow-visible p-0">
            <Image
                alt={pseudo}
                className="w-full object-cover h-[150px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
                src={avatar}
            />
        </CardBody >
        </Card>
            </div>
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
                        <td className="px-6 py-4 whitespace-nowrap">Nom Prénom :</td>
                        <td className="px-6 py-4 whitespace-nowrap">{pseudo}</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Role :</td>
                        <td className="px-6 py-4 whitespace-nowrap">{role}</td>
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
                {news
                .filter((newsItem) => `${newsItem.newsAuthor.firstname} ${newsItem.newsAuthor.lastname}` === pseudo)
                .map((newsItem) => {
                        return <CardProfilNews key={newsItem.id} newItem={newsItem} />;
                      })}
            </div>
            <h3 className="text-center font-bold mb-10">Articles publiées</h3>
            <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            
            {articles
            .filter((articleItem) => `${articleItem.articleAuthor.firstname} ${articleItem.articleAuthor.lastname}` === pseudo)
            .map((articleItem) => {
                        return <CardProfilArticles key={articleItem.id} articleItem={articleItem} />;
                      })}
            </div>
            <h3 className="text-center font-bold mb-10">Annonces publiées</h3>
            <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            {announcements
            .filter((announcementItem) => `${announcementItem.author}` === pseudo)    
            .map((announcementItem) => {
                        return <CardProfilAnnouncements key={announcementItem.id} announcementItem={announcementItem} />;
                      })}
            </div>
            </div>
        </div>
    );
}