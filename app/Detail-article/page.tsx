import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function DetailArticle() {
  return (
<div>
    <div className="flex justify-center items-center">
    <Card className="py-4 border-none shadow-none">
      <CardHeader className="mt-4 mb-4 pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-3xl">Le télétravail, pour ou contre?</h4>
        <small className="mt-2 text-default-500 font-bold">par Rayan Elyo</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl transition-transform duration-500 transform hover:scale-105"
          src="images/code.jpeg"
          width={600}
        />
      </CardBody>
    </Card>
    </div>
    <div className="mt-8 mb-10 mx-8 text-justify">
        <h4 className="font-bold text-center text-xl mb-6">Etes vous pour ou contre ?</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Magnam provident aut, quidem voluptatibus inventore iusto 
            officia! Saepe rerum officiis, deserunt beatae sunt delectus deleniti, 
            facilis neque perspiciatis ratione vero laudantium quo velit nisi 
            quam numquam quidem, amet in voluptates. Optio enim odio aliquam error 
            vitae facilis fugiat ipsam. Iusto voluptatum odio harum veniam, minima 
            inventore obcaecati cupiditate laborum alias est?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
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