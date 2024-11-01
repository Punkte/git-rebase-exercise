# Utiliser `git rebase` pour réecrire l'historique des commits
Dans cet exercice, vous allez apprendre à utiliser git rebase en mode interactif pour nettoyer et organiser l'historique des commits de votre branche de fonctionnalité (`feature-branch`). L'objectif est de regrouper les commits par type pour obtenir un historique plus propre et logique avant de fusionner cette branche dans main.

## Contexte
Vous travaillez sur une branche `feature-branch` qui contient plusieurs commits, répartis de la manière suivante :

- Des commits de type `feat` pour ajouter de nouvelles fonctionnalités.
- Des commits de type `fix` pour corriger des erreurs.
- Des commits de type `docs` pour ajouter de la documentation.   

La branche main contient un commit de type `refactor` qui n’a pas besoin d’être modifié. Votre objectif est donc uniquement de réorganiser l'historique de `feature-branch`.

## Objectifs
- Squasher les commits de documentation (docs: add some useless docs again et docs: add jsdoc) en un seul commit.
- Combiner les corrections (fix) avec les fonctionnalités qu’elles concernent directement :

Par exemple, squasher les commits `fix` dans les commits `feat` correspondants si possible.
À la fin de l'exercice, votre historique de la branche `feature-branch` doit être organisé et prêt à être fusionné dans main.

Vous êtes libre d'utiliser les commandes que vous souhaitez pour arriver au résultat voulu.   
Quand vous aurez fini, appelez moi et expliquez moi votre démarche.
