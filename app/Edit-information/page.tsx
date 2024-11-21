'use client';

import { useAppDispatch, useAppSelector} from '../../lib/hooks';
import { useEffect, useState } from 'react';
import { actionSetNews } from '../../lib/actions/news.action';
import { actionThunkAddNews } from '../../lib/thunks/news.thunk';

import ModalContitions from "../Components/ModalConditions";


export default function EditInformation() {

  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const pseudo = useAppSelector((state) => state.auth.pseudo);

  const [picture, setPicture] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [datePublication, setdatePublication] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  useEffect(() => {
    if (pseudo) {
      setFirstName(user.firstname || '');
      setLastName(user.lastname || '');
    }
  }, [user, pseudo]);
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setPicture(file ? URL.createObjectURL(file) : ''); // Génère une URL de prévisualisation pour l'image
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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rédigez votre note d&apos;information</h2>
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
          dispatch(actionSetNews({ name: 'picture', value: picture }));
          dispatch(actionSetNews({ name: 'title', value: title }));
          dispatch(actionSetNews({ name: 'subtitle', value: subtitle }));
          dispatch(actionSetNews({ name: 'content', value: content }));
          dispatch(actionSetNews({ name: 'date_publication', value: datePublication }));
          dispatch(actionSetNews({ name: 'newsAuthor', value: `${user.firstname} ${user.lastname}` }));

          await dispatch(actionThunkAddNews());
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
            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
              Titre de l&apos;article
            </label>
            <div className="mt-2.5">
              <input
                required
                id="title"
                name="title"
                type="text"
                autoComplete="title"
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
              Sous-titre
            </label>
            <div className="mt-2.5">
              <input
                required
                id="subtitle"
                name="subtitle"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={subtitle}
                onChange={(e) => {
                  setSubtitle(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2 grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
      Prénom de l&apos;auteur
    </label>
    <div className="mt-2.5">
      <input
        required
        id="firstName"
        name="firstName"
        type="text"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
    </div>
  </div>

  <div>
    <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
      Nom de l&apos;auteur
    </label>
    <div className="mt-2.5">
      <input
        required
        id="lastName"
        name="lastName"
        type="text"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
    </div>
  </div>
</div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Date de publication
            </label>
            <div className="relative mt-2.5">
              <input
                required
                id="datePublication"
                name="datePublication"
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
                required
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

