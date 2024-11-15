'use client';

import CardAnnonce from "../Components/CardAnnonce";
import { IAnnouncement } from "@/@types/announcement";
import { actionThunkAnnouncementList } from "@/lib/thunks/announcement.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loader from "../Components/Loader";

export default function Annonces() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching action to fetch announcement");
    dispatch(actionThunkAnnouncementList());
  }, [dispatch]);

  const announcement: IAnnouncement[] = useAppSelector((state) => state.announcement.announcementList);
  console.log(announcement);

  const isLoading = useAppSelector((state) => state.announcement.isloading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <h1 className="text-4xl font-extrabold text-center relative inline-block text-gray-700 mt-3 p-3">
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
      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-2">
      {announcement.map((announcementItem) => {
        return <CardAnnonce key={announcementItem.id} announcementItem={announcementItem} />;
      })}
      </section>
    </div>
  );
}