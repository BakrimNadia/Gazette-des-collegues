import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { IArticle } from "@/@types/article";
import Link from "next/link";

interface CardArticleProps {
  articleItem: IArticle;
}

export default function CardProfilArticles({ articleItem }: CardArticleProps) {
 

  return (
    <Link  href={`/Articles/${articleItem.id}`}>
      <div className="mx-2">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={articleItem.title}
              className="w-full object-cover h-[150px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={articleItem.picture}
            />
          </CardBody>
          <CardFooter className="text-small justify-between ">
            <b>{articleItem.title}</b> 
          </CardFooter>
        </Card>
        </div>
    </Link>
  );
}