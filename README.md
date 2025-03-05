# Gazette des Collègues

## 📰 Description

Gazette des Collègues est un portail d'entreprise dédié au partage d'informations importantes, de notes de service et d'articles rédigés par les employés. Il comprend également une rubrique de petites annonces internes pour faciliter l'échange entre collègues.

## ✨ Fonctionnalités principales

🔐 Authentification des salariés (JWT) pour la création et la modification des articles et annonces.

📝 Gestion des articles rédigés par les employés (rédacteurs et administrateurs).

📢 Publication de notes de service par l'administration.

📌 Rubrique de petites annonces partagées entre collègues.

🎭 Gestion des rôles : Employé, Rédacteur et Administrateur.

🚀 API RESTful développée en Node.js avec PostgreSQL et Sequelize.

🧪 Tests unitaires avec Chai et Mocha.

🏗️ Technologies utilisées

## Frontend (Next.js)

Next.js 14 - Framework React

React 18 - Librairie d'interface utilisateur

Redux Toolkit - Gestion d'état

Axios - Requêtes HTTP

NextUI - Composants UI

TailwindCSS - Framework CSS

Framer Motion - Animations UI

## Backend (Node.js & PostgreSQL)

Node.js

Express.js

Sequelize - ORM pour PostgreSQL

PostgreSQL

Chai & Mocha - Tests unitaires

## 🚀 Installation et lancement

1️⃣ Cloner le projet

```
git clone git@github.com:BakrimNadia/Gazette-des-collegues.git
cd gazette-des-collegues
```

2️⃣ Installation des dépendances

📌 Frontend

```
npm install
```

📌 Back end

```
npm install
```

3️⃣ Configuration des variables d'environnement

Créer un fichier .env dans le dossier backend et y ajouter :

DATABASE_URL=postgres://user:password@localhost:5432/gazette_db
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Lancer le projet

🚀 Démarrer le client Frontend

```
npm run dev
```

🚀 Démarrer le Back end

```
npm run dev
```

## 📜 Scripts disponibles

#### Dans le fichier package.json, vous avez les scripts suivants :

npm run dev : Démarre l'application en mode développement.

npm run build : Génère une version optimisée pour la production.

npm run start : Lance l'application en production.

npm run lint : Vérifie les erreurs ESLint.

npm test : Exécute les tests unitaires (Backend).

## Déploiement

Vercel
