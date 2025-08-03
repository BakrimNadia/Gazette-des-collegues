'use client';

import { Avatar } from "@nextui-org/react";
import CardHome from "./Components/CardHome";
import Newsletter from "./Components/newsletter";
import Vecteurs from "./Components/Vecteurs";

export default function Home() {
  return ( 
    <div className="bg-cover bg-fixed bg-gradient-to-br from-[#e2e8f0] via-[#e7dacb] to-[#e2e8f0]">
      {/* Section vidéo + H1 */}
      <section className="relative w-full h-96">
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/city.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>

        {/* Texte au-dessus de la vidéo */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4">
  <h1 
    className="text-5xl md:text-4xl sm:text-2xl font-bold tracking-tight item-center justify-center text-center mb-8"
    style={{
      animation: "fadeInUp 1.5s ease-out forwards",
      background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent", 
      backgroundClip: "text", 
      color: "black",
    }}
  >
    <span className="block text-4xl md:text-4xl sm:text-2xl pt-2 mt-2">La Gazette des collègues</span> 
    <br /> 
    <span className="text-3xl md:text-3xl sm:text-xl">
      Partage d&apos;informations internes, d&apos;articles et de petites annonces entre collègues
    </span>
  </h1>
</div>
      </section>
      <section>
        <Vecteurs />
      </section>

      {/* Contenu en dessous de la vidéo */}
      <section className="w-full mt-10 flex flex-col items-center">
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
          Parcourez nos différentes rubriques
        </h2>
        <CardHome />
      </section>

      {/* Section équipe */}
      <section className="mt-8 flex flex-col items-center">
        <div className="mb-2">
          <h2 className="text-5xl font-bold tracking-tight text-center text-gray-700 sm:text-3xl mt-6"
            style={{
              animation: "fadeInUp 1.5s ease-out forwards",
              background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent", 
              backgroundClip: "text", 
              color: "black",
            }}
          >
            Notre équipe de rédacteurs bénévoles
          </h2>
          <p className="mt-6 text-lg text-center font-semibold leading-8 text-gray-700 mx-6">
            Nos collègues rédacteurs se relaient pour vous proposer des articles de qualité et 
            vous partager les informations utiles de l&apos;entreprise, le tout dans un esprit de partage et de convivialité.
            De plus, nous avons mis en place un système de petites annonces pour vous permettre de vendre ou d&apos;acheter des objets entre collègues, et même échanger ou proposer des services.
            Pour partager une annonce, il suffit de nous contacter via le formulaire de contact.
          </p>
        </div>

        {/* Avatars */}
        <div className="flex gap-4 justify-center items-center mt-2">
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </div>
      </section>
{/* Sondage salarié avec image */}
<section className="mt-16 w-full max-w-5xl mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
    
    {/* Image à gauche */}
    <div className="md:w-1/2 w-full h-64 md:h-auto">
      <img 
        src="/images/sondage.jpg" 
        alt="Sondage illustration" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Sondage à droite */}
    <div className="md:w-1/2 w-full p-6">
      <h2 className="text-3xl font-bold text-center md:text-left mb-4"
        style={{
          background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent"
        }}
      >
        Sondage rapide
      </h2>
      <p className="text-center md:text-left mb-4 text-gray-700 font-medium">
        Quelle nouvelle fonctionnalité aimeriez-vous voir en priorité ?
      </p>
      <form className="space-y-3" onChange={(e) => {
        const value = (e.target as HTMLInputElement).value;
        document.getElementById('poll-result')!.textContent = `Merci ! Vous avez voté pour : ${value}`;
      }}>
        {[
          "Un forum de discussion",
          "Un calendrier des événements",
          "Des tutoriels vidéo internes",
          "Une messagerie interne"
        ].map((option, i) => (
          <label key={i} className="block bg-white/30 p-3 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer">
            <input type="radio" name="poll" value={option} className="mr-2" />
            {option}
          </label>
        ))}
      </form>
      <p id="poll-result" className="mt-4 text-center md:text-left font-semibold text-green-700"></p>
    </div>
  </div>
</section>


{/* FAQ Accordion */}
<section className="mt-12 w-full max-w-3xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-center mb-6"
    style={{
      background: "linear-gradient(to right, #D4AF37, #A9A9A9)", 
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent"
    }}
  >
    Questions fréquentes (FAQ)
  </h2>

  <div className="space-y-4">
    {[
      {
        question: "À quoi sert ce site ?",
        answer: "Ce portail est destiné aux salariés pour consulter les notes de service, accéder à un blog interne, et consulter ou publier des petites annonces."
      },
      {
        question: "Dois-je créer un compte ?",
        answer: "Oui, chaque salarié peut créer un compte pour publier des annonces, commenter des articles et s'abonner à la newsletter."
      },
      {
        question: "Comment publier une annonce ?",
        answer: "Il suffit de remplir le formulaire de publication et d'accepter les conditions d'utilisation."
      },
      {
        question: "Puis-je m'abonner à une newsletter ?",
        answer: "Oui, vous pouvez entrer votre adresse email dans la section Newsletter pour recevoir les dernières infos internes."
      },
      {
        question: "Qui rédige les articles ?",
        answer: "Des collègues bénévoles, volontaires et passionnés par la vie de l'entreprise !"
      }
    ].map((item, index) => (
      <details key={index} className="bg-white/30 shadow-md rounded-lg p-4 cursor-pointer">
        <summary className="font-semibold text-lg text-gray-800">{item.question}</summary>
        <p className="mt-2 text-gray-600">{item.answer}</p>
      </details>
    ))}
  </div>
</section>

      {/* Newsletter */}
      <section className="flex justify-center items-center mt-2">
        <Newsletter />
      </section>
    </div>
  );
}
