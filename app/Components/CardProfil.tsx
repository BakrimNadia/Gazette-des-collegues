import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function CardProfil() {
  const list = [
    {
      title: "Réunion",
      img: "/images/code.jpeg",
      action: "Gérer",
    },
    {
      title: "Groupe",
      img: "/images/groupe-main.png",
      action: "Gérer",
    },
    {
      title: "Construction",
      img: "/images/building2.jpeg",
      action: "Gérer",
    },
    {
      title: "entretien",
      img: "/images/entretien.png",
      action: "Gérer",
    },
    {
      title: "Healthy",
      img: "/images/healthy.jpeg",
      action: "Gérer",
    },
    {
      title: "Covoiturage",
      img: "/images/covoiturage.jpeg",
      action: "Gérer",
    },
    {
      title: "Salle",
      img: "/images/pause-cafe2.png",
      action: "Gérer",
    },
    {
      title: "Planning",
      img: "/images/planning.jpeg",
      action: "Gérer",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[150px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.action}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}