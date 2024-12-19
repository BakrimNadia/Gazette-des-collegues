import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

import { IAnnouncement } from "@/@types/announcement";
import Link from "next/link";

interface CardAnnouncementProps {
  announcementItem: IAnnouncement;
}

export default function CardProfilAnnouncements({ announcementItem }: CardAnnouncementProps) {
 

  return (
    <Link  href={`/Articles/${announcementItem.id}`}>
      <div className="mx-2">
        <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={announcementItem.title}
              className="w-full object-cover h-[150px] w-[200px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
              src={announcementItem.picture}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{announcementItem.title}</b> 
          </CardFooter>
        </Card>
        </div>
    </Link>
  );
}