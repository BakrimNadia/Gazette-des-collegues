'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { IAnnouncement } from "@/@types/announcement";
import Link from "next/link";

interface CardAnnonceProps {
  announcementItem: IAnnouncement;
}

export default function CardAnnonce({announcementItem}: CardAnnonceProps) {
  

  return (
    <Link  href={`/Annonces/${announcementItem.id}`}> 
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={announcementItem.title}
              className="w-full object-cover h-[350px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={announcementItem.picture}
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start">
            <b className="mb-1">{announcementItem.title}</b>
            <div className="flex justify-between w-full mt-">
              <p className="text-small justify-left">{announcementItem.price}</p>
              <p className="text-default-500">Voir l&apos;annonce...</p>
            </div>
          </CardFooter>
        </Card>
        </Link>
  );
}