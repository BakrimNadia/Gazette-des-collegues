'use client';

import { useParams } from 'next/navigation';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useEffect } from 'react';
import { IAnnouncement } from '@/@types/announcement';
import { actionThunkAnnouncementById } from '@/lib/thunks/announcement.thunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Loader from '@/app/Components/Loader';
import { actionSetAnnouncementId } from '@/lib/actions/announcement.action';

export default function DetailAnnouncement() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const announcementId = Number(id);

    useEffect(() => {
        console.log('Dispatching action to fetch announcement by ID');
        dispatch(actionSetAnnouncementId(announcementId));
        getAnnouncementById();
    }, [dispatch]);

    async function getAnnouncementById() {
        await dispatch(actionThunkAnnouncementById());
    }

  const announcement: IAnnouncement = useAppSelector((state) => state.announcement.announcement);
  const isLoading = useAppSelector((state) => state.announcement.isloading);

  if (isLoading) {
    return <Loader />;
  }

  if (!announcement) {
    return <div>Aucune donnée trouvée pour cette annonce</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 mb-10 md:px-8">
      <div className="md:w-2/3">
        <Card className="py-4 border-none shadow-none"
     isPressable 
     onPress={() => console.log("item pressed")}>   
          <CardHeader className="mt-4 mb-4 pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-3xl mb-2">{announcement.title}</h4>
            <small className="text-default-500 font-bold">{announcement.author}</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt={announcement.title}
              className="object-cover h-[500px] w-[600px] rounded-xl transition-transform duration-500 transform hover:scale-105"
              src={announcement.picture}
              width={600}
            />
          </CardBody>
        </Card>
      </div>
      <div className="md:w-1/3 flex flex-col justify-center item-center text-justify mt-8 mb-8">
        <h4 className=" text-center font-bold text-xl mb-6 sm:justify-center">{announcement.price}</h4>
        <p className="mb-6">{announcement.content}</p>
        <small>{announcement.category?.name}</small>
        <small>publié le {announcement.date_publication}</small>
      </div>
    </div>
  );
}