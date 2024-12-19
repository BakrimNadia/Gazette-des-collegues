import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { IArticle } from "@/@types/article";
import Link from "next/link";

interface CardArticleProps {
  newItem: IArticle;
}

export default function CardProfilArticles({ newItem }: CardArticleProps) {
 

  return (
    <Link  href={`/Articles/${newItem.id}`}>
      <div className="mx-2">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={newItem.title}
              className="w-full object-cover h-[150px]"
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