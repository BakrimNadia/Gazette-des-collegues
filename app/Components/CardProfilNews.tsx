import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { INews } from "@/@types/news";
import Link from "next/link";

interface CardNewsProps {
  newItem: INews;
}

export default function CardProfilNews({ newItem }: CardNewsProps) {
 

  return (
    <Link  href={`/Informations/${newItem.id}`}>
      <div className="mx-2">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={newItem.title}
              className="w-full object-cover h-[150px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={newItem.picture}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{newItem.title}</b> 
          </CardFooter>
        </Card>
        </div>
    </Link>
  );
}