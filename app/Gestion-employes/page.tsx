'use client';

import { Trash, Settings } from 'react-feather';

export default function GestionEmployes() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Gestion des employés</h1>
        <h2 className="text-center font-bold mt-5">Liste des inscrits</h2>
      </div>

      <div className="border border-gray-300 rounded-lg shadow-md mt-5 mx-10 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead className="bg-indigo-600">
            <tr>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Nom</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Prénom</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Email</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Rôle</th>
              <th className="px-6 py-3 text-left text-md font-medium text-white uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-md font-medium">Tony</td>
              <td className="px-6 py-4 text-md font-medium">Reichert</td>
              <td className="px-6 py-4 text-md font-medium">tony@example.com</td>
              <td className="px-6 py-4 text-md font-medium">Employé</td>
              <td className="px-6 py-4 text-md font-medium flex space-x-3">
                <button aria-label="Supprimer" className="text-gray-500 hover:text-red-600">
                  <Trash size={20} />
                </button>
                <button aria-label="Modifier" className="text-gray-500 hover:text-blue-600">
                  <Settings size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-10 mt-5">
        <button
          type="submit"
          className="block mx-auto rounded-md bg-gradient-to-r from-[#2F4F4F] to-[#00008B] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Ajouter un employé
        </button>
      </div>
    </div>
  );
}
