# IPME POEI 2026 Javascript


Une fois l'examen cloné, pensez à faire un `npm i` pour ajouter les dépendances.


## 1. Algorithmie


### 1.1 Compter les mots d'une phrase


Cet exercice permet de manipuler les chaînes de caractères et les boucles, sans utiliser la fonction native `.split()` pour rajouter de la difficulté algorithmique.

- Nom de la fonction : `countWords`
- Paramètres : `str`, une chaine de caractères
- Retour : un `entier`, représentant le nombre de mots dans la phrase

- Consignes : La fonction doit compter le nombre de mots dans la chaîne de caractères passée en paramètre. On considère qu'un mot est séparé par un espace. Tu ne dois pas utiliser de fonctions natives de découpage de chaîne de caractères. Un mot avec une apostrophe est considéré comme deux mots, un mot avec un ou plusieurs tirets est considéré comme un seul mot.

Exemple :

- Paramètre `str` : "Ceci est une phrase de test"
- Retour : `6`

- Paramètre `str` : "Un arc-en-ciel est visible"
- Retour : `4`

- Paramètre `str` : "Vive l'algorithmie avec Javascript !"
- Retour : `5`


### 1.2 Le distributeur de billets


Nom de la fonction : `getBanknotes`

- Paramètres : `amount`, un entier représentant la somme à retirer
- Retour : un `string`, contenant les informations sur les billets à donner
- Consignes : La fonction doit calculer et afficher le nombre de billets de 50€, 20€ et 10€ à distribuer pour rendre la somme demandée, en minimisant le nombre de billets distribués. Si la somme n'est pas un multiple de 10, la fonction doit renvoyer un message d'erreur "Montant invalide, les billets de moins de 10€ n'existent pas."

Exemple :

- Paramètre `amount` : 130
- Retour attendu :
  `2 billet(s) de 50€ ; 1 billet(s) de 20€ ; 1 billet(s) de 10€"`


- Paramètre `amount` : 190
- Retour attendu :
  `3 billet(s) de 50€ ; 2 billet(s) de 20€"`


### 1.3 La fusion de tableaux triés

- Nom de la fonction : `mergeArrays`
Paramètres :
    -  `arr1`, un tableau d'entiers
    -  `arr2`, un tableau d'entiers
- Retour : un `nouveau tableau` trié
- Consignes : La fonction doit prendre deux tableaux et les fusionner en un seul tableau final qui doit être trié par ordre croissant, il ignore les doublons. Tu ne dois pas utiliser la fonction native `.sort()` de JavaScript.

Exemple :
- Paramètre `arr1` : [1, 7, 4, 10]
- Paramètre `arr2` : [2, 8, 3]
- Retour : [1, 2, 3, 4, 7, 8, 10]


Exemple :
- Paramètre `arr1` : [1, 7, 4, 3]
- Paramètre `arr2` : [1, 2, 8, 3]
- Retour : [1, 2, 3, 4, 7, 8]


## 2. Manipulation du DOM


- Voir le fichier `exo_2.html`, les consignes sont dedans

