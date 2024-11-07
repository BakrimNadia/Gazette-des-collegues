'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { IArticle } from "@/@types/article";
import Link from "next/link";

interface CardArticleProps {
  articleItem: IArticle;
}

export default function CardArticle({articleItem}: CardArticleProps) {
  return (
    <Link  href={`/Articles/${articleItem.id}`}> 
    <Card className="mx-2"  shadow="sm" 
    isPressable 
    onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={articleItem.title}
          className="w-full object-cover h-[450px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
          src={articleItem.picture}
        />
      </CardBody>
      <CardFooter className="text-small flex flex-col items-start">
        <b className="mb-1">{articleItem.title}</b>
        <div className="flex justify-between w-full mt-">
          <p className="text-small justify-left">{articleItem.subtitle}</p>
          <p className="text-default-500">Lire la suite...</p>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
}