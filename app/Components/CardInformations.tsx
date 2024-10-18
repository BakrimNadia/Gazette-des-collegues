'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { INews } from "@/@types/news";
import Link from "next/link";

interface CardNewsProps {
  newItem: INews;
}

export default function CardInformations({ newItem }: CardNewsProps) {
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto max-w-7xl px-4 mb-8">
       <Link  href={`/news/${newItem.id}`}>
        <Card shadow="sm" 
        isPressable 
        onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={newItem.title}
              className="w-full object-cover h-[350px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={newItem.picture}
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start">
            <b className="mb-1">{newItem.title}</b>
            <div className="flex justify-between w-full mt-">
              <p className="text-small justify-left">{newItem.subtitle}</p>
              <p className="text-default-500">Lire la suite...</p>
            </div>
          </CardFooter>
        </Card>
        </Link>
    </div>
  );
}