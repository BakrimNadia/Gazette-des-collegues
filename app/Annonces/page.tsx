'use client';

import CardAnnonce from "../Components/CardAnnonce";
import { IAnnouncement } from "@/@types/announcement";
import { ICategory } from "@/@types/category";
import { actionThunkAnnouncementList } from "@/lib/thunks/announcement.thunk";
import { actionThunkCategoryList } from "@/lib/thunks/category.thunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Annonces() {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories: ICategory[] = useAppSelector((state) => state.category.categoryList);

  useEffect(() => {
    console.log("Dispatching action to fetch announcement");
    dispatch(actionThunkAnnouncementList());
    dispatch(actionThunkCategoryList());
  }, [dispatch]);

  const announcement: IAnnouncement[] = useAppSelector((state) => state.announcement.announcementList);
  console.log(announcement);

  const isLoading = useAppSelector((state) => state.announcement.isloading);

  if (isLoading) {
    return <Loader />;
  }

  const filteredAnnouncements = announcement.filter((announcementItem) => {
    const matchesSearchTerm = announcementItem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || 
                          (announcementItem.category?.name && 
                           announcementItem.category.name.toLowerCase() === selectedCategory.toLowerCase());
                           console.log(announcementItem.category?.name);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-2">
      <div>
        <h1 className="text-4xl font-extrabold text-center relative inline-block text-gray-700 mt-3 p-3">
          Nos Petites annonces
        </h1>
      </div>
      <p className="text-3xl text-center mt-4 mb-10">
        Partageons nos petites annonces entre collègues
      </p>
      <div className="w-full max-w-screen-xl h-[240px] px-8 py-6 rounded-2xl flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 justify-center items-center bg-gradient-to-tr from-gray-400 to-blue-400 text-white shadow-xl">
      <Input
        label="Rechercher une annonce"
        isClearable
        radius="lg"
        classNames={{
          label: "font-bold text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="saisissez un mot clé..."
        startContent={
          <MagnifyingGlassIcon
          className="h-5 w-5 text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select
          label="Filtrez par catégorie"
          radius="lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} 
          classNames={{
            label: "font-bold text-black/50 dark:text-white/90",
            popoverContent: "bg-default-200/50 dark:bg-default/60 backdrop-blur-xl shadow-xl",
            trigger: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "!cursor-pointer",
            ],
          }}
          placeholder="Sélectionnez une catégorie"
        >
           {categories.map((category) => (
            <SelectItem key={category.id} value={`${category.name}`}>
              {category.name}
        </SelectItem>
      ))}  
        </Select>
      </div>
      <section className="mt-8 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-2">
      {filteredAnnouncements.map((announcementItem) => {
        return <CardAnnonce key={announcementItem.id} announcementItem={announcementItem} />;
      })}
      </section>
      <div className="mt-10 mb-10">
      <a 
      href="/Edit-annonce"
      className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5"
      >Editer une annonce</a>
      </div>
    </div>
  );
}