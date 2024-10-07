'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardArticle() {
  const list = [
    {
      title: "Le télétravail, un sujet qui partage...",
      subtitle: "Etes-vous pour ou contre ?",
      img: "images/code.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Le Healthy food",
      subtitle: "Comment allier plaisir et santé ?",
      img: "images/healthy.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Prendre soin de nos animaux",
      subtitle: "Concilier travail et temps pour nos amis à 4 pattes",
      img: "images/chat.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Voiture électrique, est-ce l'avenir ?",
      subtitle: "Les avantages et les inconvénients",
      img: "images/voiture-electrique.jpeg",
      text: "lire la suite...",
    },
    {
      title: "architecture moderne",
      subtitle: "Les grandes villes se modernisent",
      img: "/images/building2.jpeg",
      text: "lire la suite...",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[350px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex flex-col items-start">
            <b className="mb-1">{item.title}</b>
            <div className="flex justify-between w-full mt-">
              <p className="text-small justify-left">{item.subtitle}</p>
              <p className="text-default-500">{item.text}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}