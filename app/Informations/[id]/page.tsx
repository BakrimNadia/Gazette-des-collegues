'use client';

import { useParams } from 'next/navigation';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useEffect } from 'react';
import { INews } from '@/@types/news';
import { actionThunkNewsById } from '@/lib/thunks/news.thunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Loader from '@/app/Components/Loader';
import { actionSetNewsId } from '@/lib/actions/news.action';

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

  const news: INews = useAppSelector((state) => state.news.news);
  const isLoading = useAppSelector((state) => state.news.isloading);

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
            <small className="text-default-500 font-bold">{news.user_id}</small>
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
    </div>
  );
}
