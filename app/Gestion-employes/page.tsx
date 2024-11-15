'use client';

import { useEffect } from 'react';
import { Trash, Settings } from 'react-feather';

import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { getTokenAndPseudoFromLocalStorage } from '../../localStorage/localStorage';
import { actionLogIn } from '../../lib/actions/auth.action';
import { addTokenJwtToAxiosInstance } from '../../lib/axios/axios';
import {
  actionThunkUserList,
  actionUserSoftDelete,
} from '../../lib/thunks/user.thunk';
import { actionSetUser } from '../../lib/actions/user.action';
import Link from 'next/link';
import Loader from '../Components/Loader';


export default function GestionEmployes() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const { jwt, pseudo, role, avatar } = getTokenAndPseudoFromLocalStorage();
    
        if (jwt) {
          dispatch(actionLogIn({ jwt, pseudo, role, avatar }));
          addTokenJwtToAxiosInstance(jwt);
        } else {
          console.log('rien dans le localstorage');
        }
      }, [dispatch]);

      const modified = useAppSelector((state) => state.auth.modified);
      const removed = useAppSelector((state) => state.user.remove);
      const users = useAppSelector((state) => state.user.users);
      //const user = useAppSelector((state) => state.user.user);
      const isLoading = useAppSelector((state) => state.user.isloading);
      
      useEffect(() => {
        dispatch(actionThunkUserList());
      }, [modified, removed, dispatch]);



      if (isLoading) {
        return <Loader />;
      }
    
      console.log('Liste des utilisateurs récupérés:', users);

  return (
    <div>
      <div>
        <h1 className="text-3xl text-gray-600 font-bold text-center mt-5">Gestion des employés</h1>
        <h2 className="text-center text-gray-600 font-bold mt-5">Liste des inscrits</h2>
      </div>

      <div className="border border-gray-300 rounded-lg shadow-md mt-5 mx-10 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9]">
            <tr>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Nom</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Prénom</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Email</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Rôle</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.email} className="hover:bg-gray-300">
              <td className="px-6 py-4 text-md font-medium">{user.firstname}</td>
              <td className="px-6 py-4 text-md font-medium">{user.lastname}</td>
              <td className="px-6 py-4 text-md font-medium">{user.email}</td>
              <td className="px-6 py-4 text-md font-medium">{user.role}</td>
              <td className="px-6 py-4 text-md font-medium flex space-x-3">
                <button aria-label="Supprimer" 
                className="text-gray-500 hover:text-red-600"
                onClick={async () => {
                    dispatch(
                      actionSetUser({ name: 'email', value: user.email })
                    );
                    await dispatch(actionUserSoftDelete());
                  }}
                >
                  <Trash size={20} />
                </button>
                <button aria-label="Modifier" className="text-gray-500 hover:text-blue-600">
                  <Settings size={20} />
                </button>
              </td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>

      <div className="mb-10 mt-5">
        <Link href={'/Inscription'}>
        <button
          type="submit"
          className="block mx-auto rounded-md bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Ajouter un employé
        </button>
        </Link>
      </div>
    </div>
  );
}
