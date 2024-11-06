'use client';

import { actionSetConfirmPassword, actionSetUser } from "@/lib/actions/user.action";
import { useAppDispatch } from "@/lib/hooks";
import { actionRegister } from "@/lib/thunks/auth.thunk";
import { useState } from "react";

export default function Compte() {
    const dispatch = useAppDispatch();

    const roles = [
      { key: 'Employé', label: 'Employé' },
      { key: 'Admin', label: 'Admin' },
    ];
  
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');

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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gestion compte</h2>
            <p className="mt-2 text-md leading-8 text-gray-600">
            Vous pouvez modifier les informations du compte.
            </p>
        </div>
        <form method='post'
      className="mx-auto mt-16 max-w-xl sm:mt-20"
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
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
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
  <label htmlFor="role" className="block text-sm font-semibold leading-6 text-gray-900">
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
                value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
            className="block w-full rounded-md bg-gradient-to-r from-[#2F4F4F] to-[#00008B] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Modifier
          </button>
        </div>
      </form>
        </div>
    );
    }