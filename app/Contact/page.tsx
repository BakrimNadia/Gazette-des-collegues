'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [firstnameValue, setFirstnameValue] = useState('');
  const [lastnameValue, setLastnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  return (
    <div className="relative isolate bg-gradient-to-br from-[#e2e8f0] via-[#e7dacb] to-[#e2e8f0] px-2 py-10 sm:py-16 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Formulaire (gauche) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="w-full lg:w-1/2"
        >
          <div className="text-center lg:text-left mb-8">
            <h1
              className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] bg-clip-text text-transparent"
              style={{
                animation: "textSlide 5s ease-out forwards",
              }}
            >
              Contactez-nous
            </h1>
            <p className="text-md font-semibold leading-8 text-black">
              Une suggestion ? Une question ? N&apos;hésitez pas à nous contacter.
            </p>
          </div>

          <form
            action="#"
            method="POST"
            className="border rounded-lg shadow-xl pt-4 pb-4 px-3 backdrop-blur-lg bg-white/80"
          >
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
                  Nom
                </label>
                <input
                  required
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={firstnameValue}
                  onChange={(e) => setFirstnameValue(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700">
                  Prénom
                </label>
                <input
                  required
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={lastnameValue}
                  onChange={(e) => setLastnameValue(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                  Poste dans l&apos;entreprise
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={companyValue}
                  onChange={(e) => setCompanyValue(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-700">
                  Téléphone
                </label>
                <input
                  required
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-400 sm:text-sm"
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="block w-full rounded-md bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] px-3.5 py-2.5 text-center text-md font-semibold text-white shadow hover:scale-105 transition-transform"
              >
                Envoyer
              </button>
            </div>
          </form>
        </motion.div>

        {/* Image (droite) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, type: 'spring' }}
          className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
        >
          <img
            src="/images/pc-contact.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl opacity-80 object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
