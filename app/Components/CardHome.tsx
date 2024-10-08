'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardHome() {
  const list = [
    {
      title: "Consultez les notes d'informations",
      img: "images/building2.jpeg",
      subtitle: "Accédez",
      link: "/Informations", // Lien ajouté
    },
    {
      title: "Lisez nos articles d'actualité",
      img: "/images/healthy.jpeg",
      subtitle: "Accédez",
      link: "/Articles", 
    },
    {
      title: "Petites annonces entre collègues",
      img: "images/velo.jpeg",
      subtitle: "Accédez",
      link: "/Annonces", 
    },
    {
      title: "Une suggestion ? Contactez-nous",
      img: "images/enveloppe2.jpeg",
      subtitle: "Accédez",
      link: "/Contact", 
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto max-w-7xl px-4">
      {list.map((item, index) => (
        <a href={item.link} key={index} className="w-full flex justify-center"> 
          <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="max-w-sm">
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
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.subtitle}</p>
            </CardFooter>
          </Card>
        </a>
      ))}
    </div>
  );
}