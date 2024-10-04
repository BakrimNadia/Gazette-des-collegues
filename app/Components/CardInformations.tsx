'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardInformations() {
  const list = [
    {
      title: "Nouvelle salle de pause",
      subtitle: "Ouverture de la nouvelle salle de pause",
      img: "images/pause-cafe2.png",
      text: "lire la suite...",
    },
    {
      title: "Salle d'entretien rénovée",
      subtitle: "Agrandissement de la salle et rafraîchissement",
      img: "images/entretien.png",
      text: "lire la suite...",
    },
    {
      title: "Réunion le vendredi 15 octobre",
      subtitle: "Objet : changement de fournisseur",
      img: "images/reunion.png",
      text: "lire la suite...",
    },
    {
      title: "Concernant la photocopieuse",
      subtitle: "Evitons les pannes inutiles",
      img: "images/photocopieuse.jpeg",
      text: "lire la suite...",
    },
    {
      title: "Bonne nouvelle !",
      subtitle: "Notre CA est en croissance cette année",
      img: "/images/statistique.png",
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