import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function DetailInformation() {
  return (
<div>
    <div className="flex justify-center items-center">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">Réunion importante</h4>
        <small className="text-default-500">par André Leroy</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={500}
        />
      </CardBody>
    </Card>
    </div>
    <div className="mt-4 mb-4 mx-8">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Magnam provident aut, quidem voluptatibus inventore iusto 
            officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, 
            facilis neque perspiciatis ratione vero laudantium quo velit nisi 
            quam numquam quidem, amet in voluptates. Optio enim odio aliquam error 
            vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima 
            inventore obcaecati cupiditate laborum alias est?
        </p>
    </div>
 </div>
  );
}