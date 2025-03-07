'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { actionLogIn, actionLogOut } from '../../lib/actions/auth.action';
import { useEffect } from 'react';
import { getTokenAndPseudoFromLocalStorage } from '@/localStorage/localStorage';


const navigation = [
  { name: 'Accueil', href: '/', current: false },
  { name: 'Informations', href: '/Informations', current: false },
  { name: 'Blog', href: '/Articles', current: false },
  { name: 'Petites annonces', href: '/Annonces', current: false },
  { name: 'Contact', href: '/Contact', current: false },
];

// Fonction utilitaire pour la gestion des classes
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const dispatch = useAppDispatch();

  // Sélection de l'état d'authentification et des informations utilisateur depuis le store Redux
  const pseudo = useAppSelector((state) => state.auth.pseudo);
  const avatar = useAppSelector((state) => state.auth.avatar);

  const userRole = useAppSelector((state) => state.auth.role); 
  const hasAccess = userRole === "Admin"

   // Initialiser l'état d'authentification au chargement de la navbar
   useEffect(() => {
    const { jwt, pseudo, role, avatar } = getTokenAndPseudoFromLocalStorage();
    dispatch(actionLogIn({ jwt, pseudo, role, avatar })); // Action pour charger l'état à partir de localStorage
  }, [dispatch]);

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    dispatch(actionLogOut());
    // Toute logique supplémentaire, par exemple redirection, peut être ajoutée ici
  };

  return (
    <Disclosure as="nav" className="bg-gradient-to-b from-black to-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Bouton pour le menu mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-white  hover:text-gray-700 focus:outline-none">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          
          {/* Logo et liens de navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img src="https://www.image-heberg.fr/files/17316693161300500904.png" alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-400 text-white' : 'text-white  hover:text-gray-600',
                      'rounded-md px-3 py-2 text-md font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                {hasAccess && (
                  <a
                    href="/Gestion-employes"
                    className={classNames(
                      'text-white hover:bg-gray-400 hover:text-white',
                      'rounded-md px-3 py-2 text-md font-medium'
                    )}
                  >
                    Gestion des employés
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bouton utilisateur pour connexion/déconnexion */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex items-center text-sm focus:outline-none">
                {/* Afficher l'avatar de l'utilisateur ou une icône par défaut */}
                {avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatar} alt={`${pseudo}'s avatar`} className="h-8 w-8 rounded-full" />
                ) : (
                  <div>
                  <UserCircleIcon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                )}
                {/* Afficher le pseudo de l'utilisateur à côté de l'icône */}
                {pseudo && (
                  <span className="ml-2 text-white text-md">{pseudo}</span>
                )}
              </MenuButton>
              
              {/* Menu conditionnel en fonction de la présence du pseudo */}
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {pseudo ? (
                  <>
                    <MenuItem>
                      <span className="block px-4 py-2 text-sm text-gray-700">
                        {pseudo}
                      </span>
                    </MenuItem>
                    <MenuItem>
                        <a href="/Profil" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-100">
                        Mon Profil
                    </a>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left text-sm font-semibold text-gray-700 hover:text-gray-100"
                      >
                        Déconnexion
                      </button>
                    </MenuItem>
                    
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <a href="/Connexion" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-100">
                        Connexion
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/Inscription" className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-100">
                        Inscription
                      </a>
                    </MenuItem>
                  </>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'text-white' : 'text-gray-200 hover:text-gray-700',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {hasAccess && (
                  <a
                    href="/Gestion-employes"
                    className={classNames(
                      'text-white hover:text-gray-700',
                      'rounded-md mt-3 pt-3 px-3 py-2 text-md font-medium'
                    )}
                  >
                    Gestion des employés
                  </a>
                )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
