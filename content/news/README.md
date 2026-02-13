# Ajouter une actualité

Ce dossier contient les actualités du site, **1 fichier Markdown par actualité**.

## 1. Créer un fichier Markdown

Créer un nouveau fichier dans `content/news/` avec ce format de nom :

`YYYY-MM-DD-mon-slug.md`

Exemple :

`2026-02-13-journee-portes-ouvertes.md`

## 2. Utiliser ce frontmatter

Le frontmatter est obligatoire en haut du fichier :

```md
---
title: "Titre de l’actualité"
date: "2026-02-13"
excerpt: "Résumé court affiché dans la liste"
source_url: "https://example.com/article-source"
---
```

Champs :
- `title` : obligatoire
- `date` : obligatoire, format `YYYY-MM-DD`
- `excerpt` : optionnel (si absent, un extrait est généré automatiquement)
- `source_url` : optionnel

## 3. Écrire le contenu Markdown

Le contenu sous le frontmatter est rendu automatiquement dans la page article.

Exemple :

```md
**Texte en gras**, *italique*, [lien](https://example.com).

## Intertitre

Paragraphe de contenu.
```

## 4. Ajouter des images dans une actualité

1. Placer l’image dans `public/news-media/`
2. Référencer l’image dans le Markdown avec un chemin absolu site :

```md
![Description de l'image](/news-media/mon-image.jpg)
```

## 5. Génération automatique

La génération des articles est automatique avant :
- `npm start`
- `npm run build`
- `npm test`

Commande manuelle possible :

```bash
npm run news:build
```

Cette commande met à jour :

`src/app/pages/news/generated/news.generated.ts`

## 6. Vérifier le rendu

Démarrer le site :

```bash
npm start
```

Puis vérifier :
- la liste : `http://localhost:4200/actualites`
- l’article : `http://localhost:4200/actualites/<slug>`

Le `slug` est le nom du fichier sans `.md`.

## 7. Erreurs fréquentes

- Frontmatter absent ou mal fermé (`--- ... ---`)
- `date` invalide
- image non copiée dans `public/news-media/`
- lien d’image non absolu (`/news-media/...` attendu)
