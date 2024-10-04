'use client';

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardHome() {
  const list = [
    {
      title: "Consultez les notes d'informations",
      img: "images/building2.jpeg",
      subtitle: "Accédez",
    },
    {
      title: "Lisez nos articles",
      img: "/images/healthy.jpeg",
      subtitle: "Accédez",
    },
    {
      title: "Nos petites annonces entre collègues",
      img: "images/machine-a-laver.jpeg",
      subtitle: "Accédez",
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
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.subtitle}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}