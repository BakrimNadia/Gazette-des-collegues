'use client';


export default function Vecteurs() {
    const list = [
        {
          title: "desk",
          img: "images/desk.webp",
        },
        {
          title: "news",
          img: "images/news.webp",
        },
        {
          title: "mail",
          img: "images/mail.webp",
        },
      ];

    return (
        <div className="mt-10 gap-x-1 grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 justify-center items-center mx-auto max-w-7xl px-2">
      {list.map((item, index) => (
        <div key={index} className="w-full flex justify-center px-2 mb-2"> 
          <div className="overflow-visible p-0">
            <img
            className="w-full rounded-none object-cover h-[70px] w-[70px] transition-transform duration-500 ease-in-out transform group-hover:scale-110 hover:scale-105"
            src={item.img}
            alt={item.title}
            />
          </div>
        </div>
      ))}
        
        </div>
    );
    }