'use client';

import { useParams } from 'next/navigation';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useEffect } from 'react';
import { INews } from '@/@types/news';
import { actionThunkNewsById, actionThunkNewsList, actionThunkDeleteNews } from '@/lib/thunks/news.thunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Loader from '@/app/Components/Loader';
import { actionSetNews, actionSetNewsId } from '@/lib/actions/news.action';
//import router from 'next/router';

export default function DetailInformation() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const newsId = Number(id);

    useEffect(() => {
        console.log('Dispatching action to fetch news by ID');
        dispatch(actionSetNewsId(newsId));
        getNewsById();
    }, [dispatch]);

    async function getNewsById() {
        await dispatch(actionThunkNewsById());
    }


  const modified = useAppSelector((state) => state.news.isEdited);
  const removed = useAppSelector((state) => state.news.deleted);
  const news: INews = useAppSelector((state) => state.news.news);
  const isLoading = useAppSelector((state) => state.news.isloading);

  useEffect(() => {
    dispatch(actionThunkNewsList());
  }, [modified, removed, dispatch]);

 /* useEffect(() => {
    if (removed) {
      router.push('/Informations'); 
    }
  }, [removed, router]); */

  const userRole = useAppSelector((state) => state.auth.role); 
  const hasAccess = userRole === "Admin" || userRole === "Rédacteur";

  if (isLoading) {
    return <Loader />;
  }

  if (!news) {
    return <div>Aucune donnée trouvée pour cette news</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <Card className="py-4 border-none shadow-none"
     isPressable 
     onPress={() => console.log("item pressed")}>   
          <CardHeader className="mt-4 mb-4 pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-3xl">{news.title}</h4>
            <small className="text-default-500 font-bold">{news.newsAuthor?.firstname && news.newsAuthor?.lastname 
                ? `${news.newsAuthor.firstname} ${news.newsAuthor.lastname}` 
                : 'Auteur inconnu'}</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={news.title}
              className="object-cover h-[500px] w-[600px] rounded-xl transition-transform duration-500 transform hover:scale-105"
              src={news.picture}
              width={600}
            />
          </CardBody>
        </Card>
      </div>
      <div className="mt-8 mb-10 mx-8 text-justify">
        <h4 className="font-bold text-center text-xl mb-6">{news.subtitle}</h4>
        <p>{news.content}</p>
        <small>publié le {news.date_publication}</small>
      </div>
      {hasAccess && (
      <div className="text-center mb-10">
        <button className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5">Modifier</button>
        <button 
        className="bg-gradient-to-r from-red-500 to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5"
        onClick={async () => {
          dispatch(
            actionSetNews({ name: 'title', value: news.title })
          );
          await dispatch(actionThunkDeleteNews());
        }}
        >supprimer</button>
      </div>
      )}
    </div>
  );
}
