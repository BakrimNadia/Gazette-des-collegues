'use client';

import ModalContitions from "../Components/ModalConditions";
import {ICategory} from "@/@types/category";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { actionThunkCategoryList } from "@/lib/thunks/category.thunk";
import { actionSetAnnouncement } from "@/lib/actions/announcement.action";
import { useEffect, useState } from "react";

export default function EditAnnonce() {
const dispatch = useAppDispatch();
  const categories: ICategory[] = useAppSelector((state) => state.category.categoryList);

  useEffect(() => {
    console.log("Dispatching action to fetch category");
    dispatch(actionThunkCategoryList());
  }, [dispatch]);

  const [picture, setPicture] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [datePublication, setdatePublication] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setPicture(file ? URL.createObjectURL(file) : 'https://www.image-heberg.fr/files/17321854994127176357.jpg'); 
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]"
      >
        <div className="custom-clip-path relative left-1/2 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rédigez votre annonce</h2>
        <p className="mt-2 text-md leading-8 text-gray-600">
         Merci de respecter les règles de publication.
        </p>
        <ModalContitions />
      </div>

      {/* Form */}
      <form action="#" 
      method="POST" 
      className="mx-auto mt-16 max-w-xl sm:mt-20"
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch(actionSetAnnouncement({name: 'picture' ,value : picture}));
        dispatch(actionSetAnnouncement({name: 'title' ,value : title}));
        dispatch(actionSetAnnouncement({name: 'price' ,value : price}));
        dispatch(actionSetAnnouncement({name: 'author' ,value : author})); 
        dispatch(actionSetAnnouncement({name: 'date_publication' ,value : datePublication}));
        dispatch(actionSetAnnouncement({name: 'content' ,value : content}));
        const selectedCategory = categories.find((cat) => cat.name === category);
        if (selectedCategory) {
          dispatch(actionSetAnnouncement({name: 'category' ,value : selectedCategory.id.toString()}));
        }
      }}

      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
 
        <div className="sm:col-span-2">
    <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">
      Ajouter une image
    </label>
    <div className="mt-2.5">
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*" 
        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-indigo-600 hover:file:bg-gray-100"
        onChange={handleFileChange}
        />
        {picture && <img src={picture} alt="Prévisualisation" />}     
    </div>
  </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Titre de l&apos;article
            </label>
            <div className="mt-2.5">
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Prix ou service
            </label>
            <div className="mt-2.5">
              <input
                id="price"
                name="price"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Auteur
            </label>
            <div className="mt-2.5">
              <input
                id="author"
                name="author"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>
          </div>
          <label htmlFor="category" className="block text-sm font-semibold leading-6 text-gray-900">
            Choisir une catégorie
          </label>
          <div className="relative mt-2.5">
          <select name="category" id="category" 
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          >
          {categories.map((category) => (
            <option key={category.id} value={`${category.name}`}>
              {category.name}
        </option>
      ))}  
          </select>
 </div>
          <div className="sm:col-span-2">
            <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
              Date de publication
            </label>
            <div className="relative mt-2.5">
              <input
                id="date"
                name="date"
                type="date"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={datePublication}
                onChange={(e) => {
                  setdatePublication(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2 mb-4">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Contenu de l&apos;article
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
