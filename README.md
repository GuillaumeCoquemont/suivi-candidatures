# Suivi de Candidatures

Application React pour gérer et suivre ses candidatures en recherche d'emploi.

## Fonctionnalités

- Ajouter, modifier et supprimer des candidatures
- Statuts colorés (Non envoyé, Envoyé, En attente, Entretien, Réponse positive, Refus)
- Alerte automatique pour les relances J+10
- Recherche et filtre par statut
- Tableau de bord avec statistiques en temps réel
- Sauvegarde automatique dans le navigateur (localStorage)

## Stack

- **React 19** + **Vite**
- **ESLint** (SWC)
- **localStorage** pour la persistance des données

## Installation

```bash
git clone https://github.com/GuillaumeCoquemont/suivi-candidatures.git
cd suivi-candidatures
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

## Utilisation

Les données sont sauvegardées dans le navigateur via localStorage.
Aucun backend, aucune donnée envoyée en ligne.

## Licence

Projet personnel — tous droits réservés.