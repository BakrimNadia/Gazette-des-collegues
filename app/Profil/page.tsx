"use client";

import CardProfil from "../Components/CardProfil";

export default function Profil() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div>
                <h1 className="text-4xl font-extrabold text-center relative inline-block text-gray-700 mt-5">
                    Mon profil
                </h1>
            </div>
            <h2 className="text-3xl text-center mt-4">Mes informations personnelles</h2>
            <table className="mt-10 divide-gray-300 px-5 border">
                <thead className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Mes infos
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Nom</td>
                        <td className="px-6 py-4 whitespace-nowrap">Doe</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Prénom</td>
                        <td className="px-6 py-4 whitespace-nowrap">John</td>
                    </tr>

                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Email</td>
                        <td className="px-6 py-4 whitespace-nowrap">abcd@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Role</td>
                        <td className="px-6 py-4 whitespace-nowrap">Employé</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-10">
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] text-white font-bold px-4 py-2 rounded-md mx-5">Modifier</button>
            </div>
            <h2 className="text-3xl text-center mt-4">Mes redactions</h2>
            <div className="mt-10 mb-10">
                <CardProfil />
            </div>
        </div>
    );
}