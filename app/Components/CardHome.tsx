'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardHome() {
  const list = [
    {
      title: "Consultez les informations internes",
      img: "images/entreprise-fauteuil.jpg",
      subtitle: "Accédez",
      link: "/Informations", 
    },
    {
      title: "Lisez nos articles d'actualité",
      img: "images/articles.jpeg",
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
      img: "images/mailing.jpeg",
      subtitle: "Accédez",
      link: "/Contact", 
    },
  ];

  return (
    <div className="gap-x-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-center items-center mx-auto max-w-7xl px-2">
      {list.map((item, index) => (
        <a href={item.link} key={index} className="w-full flex justify-center px-2 mb-2"> 
          <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="max-w-sm max-w-full rounded-none">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full rounded-none object-cover h-[350px] w-[600px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
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