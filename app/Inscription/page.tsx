'use client';

import { useAppDispatch } from '../../lib/hooks';
import {
  actionSetConfirmPassword,
  actionSetUser,
} from '../../lib/actions/user.action';
import { actionRegister } from '../../lib/thunks/auth.thunk';
import { useState } from 'react';


export default function Inscription() {
  const dispatch = useAppDispatch();

  const roles = [
    { key: 'Employé', label: 'Employé' },
    { key: 'Rédacteur', label: 'Rédacteur' },
  ];

  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="relative isolate px-6 py-24 bg-[url('/images/connect.jpg')] bg-cover bg-fixed opacity-85 sm:py-32 lg:px-8">
      {/* Main content */}
      <div className="mx-auto max-w-2xl text-center">
      <h1 className="pt-2 pb-2 text-5xl font-bold tracking-tight text-center border rounded-lg backdrop-blur-lg sm:text-3xl mb-8"
        style={{
          animation: "textSlide 5s ease-out forwards",
          background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          backgroundClip: "text", 
          color: "black", 
        }}
        >
         Inscription
        </h1>
      </div>

      {/* Form */}
      <form method='post'
      className="mx-auto border rounded-lg shadow-xl pt-4 pb-4 px-3 backdrop-blur-lg mt-16 max-w-xl sm:mt-20"
      onSubmit={async (e) => {
        e.preventDefault();
          dispatch(actionSetUser({ name: 'lastname', value: lastname }));
          dispatch(actionSetUser({ name: 'firstname', value: firstname }));
          dispatch(actionSetUser({ name: 'email', value: email }));
          dispatch(actionSetUser({ name: 'password', value: password }));
          dispatch(actionSetConfirmPassword(confirmPassword));
          dispatch(actionSetUser({ name: 'role', value: role }));

          await dispatch(actionRegister());
        }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
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
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
             />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
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
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
             />
            </div>
          </div>

          <div className="sm:col-span-2">
  <label htmlFor="role" className="block text-sm font-semibold leading-6 text-white">
    Rôle
  </label>
  <div className="mt-2.5">
    <select
      required
      id="role"
      name="role"
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      value={role}
      onChange={(e) => {
        setRole(e.target.value);
      }}
    >
      <option value="" disabled>Choisissez un rôle</option>
      {roles.map((r) => (
        <option key={r.key} value={r.key}>
          {r.label}
        </option>
      ))}
    </select>
  </div>
</div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
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
                value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Mot de passe
            </label>
            <div className="mt-2.5">
              <input
                required
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              />
            </div>
          </div>

          <div className="sm:col-span-2 mb-4">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Confirmation du mot de passe
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
