'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardAnnonce() {
  const list = [
    {
      title: "Vend appareil photo",
      subtitle: "Prix : 150€",
      img: "images/appareil-photo.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Vend machine à laver neuve",
      subtitle: "Prix : 200€",
      img: "images/machine-a-laver.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Vend vélo de ville",
      subtitle: "Prix : 100€",
      img: "images/velo.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Propose covoiturage",
      subtitle: "Service",
      img: "images/covoiturage.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Echange de congés en novembre",
      subtitle: "Service",
      img: "/images/planning.jpeg",
      text: "lire la suite...",
    },
    {
        title: "vends sac de voyage",
        subtitle: "Prix : 50€",
        img: "/images/sac.jpeg",
        text: "lire la suite...",
      },
  ];

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto max-w-7xl px-4">
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