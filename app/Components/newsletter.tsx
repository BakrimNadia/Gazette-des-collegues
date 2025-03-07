import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 text-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight">Inscrivez-vous à notre newsletter</h2>
            <p className="mt-4 text-lg">
              Pour rester toujours informer à l&apos;actualité de notre entreprise, n&apos;hésitez pas à vous inscrire à notre newsletter.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Votre email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Votre email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-700 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gradient-to-r from-[#D4AF37] to-[#A9A9A9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Souscrire
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray" />
              </div>
              <dt className="mt-4 text-base font-semibold">Articles hebdomadaires</dt>
              <dd className="mt-2 text-base/7">
                Recevez chaque semaine un nouvel article ainsi que les informations importantes en premier plan.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-gray" />
              </div>
              <dt className="mt-4 text-base font-semibold">Informations interne</dt>
              <dd className="mt-2 text-base/7">
                Nous vous partageons les notes de service et les informations importantes de l&apos;entreprise chaque semaine.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
