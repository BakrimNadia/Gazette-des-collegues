'use client';

import React, { useState } from 'react';

export default function Contact() {

  const [firstnameValue, setFirstnameValue] = useState('');
  const [lastnameValue, setLastnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  return (
    <div className="relative isolate bg-[url('/images/world.jpg')] bg-cover bg-fixed opacity-85 px-6 py-24 sm:py-32 lg:px-8">
 
      {/* Main content */}
      <div className="mx-auto max-w-3xl text-center">
      <h1 className="mt-5 mb-5 pt-2 pb-2 mx-2 px-2 text-4xl font-bold tracking-tight bg-gray-700 text-center border rounded-lg backdrop-blur-lg sm:text-3xl mb-8"
        style={{
          animation: "textSlide 5s ease-out forwards",
          background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          backgroundClip: "text", 
          color: "black", 
        }}
        >
         Contactez-nous
        </h1>
        <p className="mt-2 text-md font-semibold leading-8 text-black">
          Une suggestion ? Une question ? N&apos;hésitez pas à nous contacter.
        </p>
      </div>

      {/* Form */}
      <form action="#" method="POST" className="mx-auto border rounded-lg shadow-xl pt-4 pb-4 px-3 backdrop-blur-lg mt-16 max-w-xl sm:mt-20 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-white">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                required
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={firstnameValue}
                onChange={(e) => {
                  setFirstnameValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-md font-semibold leading-6 text-white">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                required
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={lastnameValue}
                onChange={(e) => {
                  setLastnameValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-md font-semibold leading-6 text-white">
              Poste dans l&apos;entreprise
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={companyValue}
                onChange={(e) => {
                  setCompanyValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-md font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-md font-semibold leading-6 text-white">
              Téléphone
            </label>
            <div className="relative mt-2.5">
              <input
                required
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={phoneValue}
                onChange={(e) => {
                  setPhoneValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-2 mb-4">
            <label htmlFor="message" className="block text-md font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={messageValue}
                onChange={(e) => {
                  setMessageValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
