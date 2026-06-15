# Taverna — site web (redesign)

Refonte moderne du site de **Taverna**, le club social et bar mythique du
Plateau-Mont-Royal à Montréal. Site bilingue (français par défaut / anglais),
avec une touche québécoise, des éléments interactifs et un formulaire de contact.

> Modern redesign of **Taverna**, the legendary social club & bar in
> Plateau-Mont-Royal, Montréal. Bilingual (French default / English), with a
> Québécois touch, interactive elements, and a working contact form.

## Structure

```
.
├── index.html              # Page unique (toutes les sections)
├── assets/
│   ├── favicon.svg
│   ├── css/styles.css      # Tout le style + responsive
│   └── js/
│       ├── i18n.js         # Dictionnaires FR/EN + bascule de langue
│       └── main.js         # Statut ouvert/fermé, menu mobile, reveal, formulaire
└── .claude/launch.json     # Config du serveur de prévisualisation
```

## Lancer en local

C'est un site statique — aucune compilation requise. Au choix :

```bash
# Python
python -m http.server 8123

# ou Node
npx serve .
```

Puis ouvrir http://localhost:8123

## Fonctionnalités

- **Bilingue FR / EN** — défaut français, bascule en haut à droite et dans le
  pied de page, choix mémorisé (localStorage). Le `<title>`, la balise
  description et les formats d'heure (« 3 h » vs « 3 AM ») s'adaptent.
- **Statut en direct** — pastille « Ouvert / Fermé » calculée selon les heures
  réelles (mer–jeu 18 h–2 h, ven–dim 18 h–3 h), gère le passage après minuit et
  affiche l'heure de fermeture ou la prochaine ouverture.
- **Programmation & heures** — la soirée du jour est mise en évidence
  automatiquement.
- **Interactions** — apparition au défilement, en-tête qui se condense, lien de
  navigation actif (scrollspy), menu mobile, marquise québécoise, carte Google.
- **Formulaire de contact** — validation en direct + envoi (voir ci-dessous).
- **Accessibilité / perf** — HTML sémantique, `prefers-reduced-motion`, contenu
  visible sans JS, contrastes élevés, aucune dépendance lourde.

## Activer l'envoi des courriels du formulaire

Par défaut, le formulaire ouvre le client courriel du visiteur, pré-rempli vers
`info@tavernabar.ca` (fonctionne sans serveur).

Pour recevoir les messages directement dans une boîte de réception sans backend,
utilisez un service comme [Formspree](https://formspree.io) :

1. Créez un formulaire et copiez son endpoint (`https://formspree.io/f/xxxxxxx`).
2. Dans `assets/js/main.js`, renseignez :

   ```js
   var FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
   ```

Le formulaire enverra alors les messages en arrière-plan (fetch POST) et
affichera la confirmation, sans jamais quitter la page.

## Déploiement

Hébergez le dossier tel quel sur n'importe quel hébergeur statique
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

## Couleurs & images

La palette est tirée du lieu lui-même : **turquoise** (les tabourets lumineux du
bar), **brique / rouille**, **rouge néon** (l'enseigne TAVERNA) et **ambre** (les
lampes rétro suspendues), sur un fond presque noir. Les variables sont définies
en haut de `assets/css/styles.css` (`:root`).

Les vrais médias du dossier `Images/` sont intégrés :

- **Hero** — vidéo de fond `fancy-shot.mp4` (muette, en boucle, avec image de
  secours `bar.webp`). La vidéo est masquée sur mobile et si l'utilisateur a
  activé « réduire les animations », et se met en pause hors écran.
- **Bar · Billard · Danse** — `bar.webp`, `pool-table.webp`, `dance-floor-painting-event.webp`.
- **L'Expérience** — l'entrée au néon `entrance.JPG` (image mise à jour).
- **Galerie + lightbox** — 7 photos, dont `bartending.jpeg`.

Vendredi est mis en valeur comme la soirée **la plus achalandée**.

Animations : vidéo du hero, zoom Ken Burns (secours), scintillement néon du logo,
dégradé animé, survols zoom, balayage lumineux des boutons.

## À mettre à jour avant la mise en ligne

- Confirmer l'URL exacte de la page Facebook (placeholder générique actuellement).
- Renseigner `FORM_ENDPOINT` pour la réception des messages.
