'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '../../lib/hooks';
import {
  actionChangeCredential,

  actionRememberMe,
} from '../../lib/actions/auth.action';
import { actionLoginCheck } from '../../lib/thunks/auth.thunk';
import { Checkbox } from '@nextui-org/react';


export default function Connexion() {
  const dispatch = useAppDispatch();

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Dispatcher les actions pour gérer l'état de connexion
    dispatch(actionChangeCredential({ name: 'email', value: emailInput }));
    dispatch(actionChangeCredential({ name: 'password', value: passwordInput }));
    dispatch(actionRememberMe(checkboxInput));

    const resultAction = await dispatch(actionLoginCheck());
    
    if (actionLoginCheck.rejected.match(resultAction)) {
      setErrorMessage('Échec de la connexion. Veuillez vérifier vos identifiants.');
    } else {
      setErrorMessage('Connexion réussie !');
      // Réinitialiser les champs
      setEmailInput('');
      setPasswordInput('');
      setCheckboxInput(false);
    }
  };

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]"
      >
        <div className="custom-clip-path relative left-1/2 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mb-8"
          style={{
            animation: "fadeInUp 1.5s ease-out forwards",
            background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            backgroundClip: "text", 
            color: "black",
          }}
        >
          Connexion
        </h2>
        <p className="mt-2 text-md leading-8 text-gray-600">
          Entrez vos identifiants pour vous connecter.
        </p>
        {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>} {/* Affichage du message d'erreur */}
      </div>

      {/* Form */}
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2 mb-4">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Mot de passe
            </label>
            <div className="mt-2.5">
              <input
                required
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
          </div>

          <div className="checkbox">
            <div className="mb-2">
              <Checkbox
                type="checkbox"
                className="checked:bg-gray-500"
                checked={checkboxInput}
                onChange={() => setCheckboxInput(!checkboxInput)}
              />
              <label htmlFor="checkbox-login-form" className="checkbox-label">
                Restez connecté
              </label>
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
