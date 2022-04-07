
//##Créer un objet de configuration
//on va regrouper la configuration dans un objet.
//On pourrait ainsi avoir un objet game, on y renseignera sous forme de propriétés le nombre à chercher et le nombre d'essais.
function aleatoryNumber(min,max){
    var searchedNumber = Math.random();
    searchedNumber = searchedNumber * 500;
    searchedNumber = Math.round(searchedNumber)
    return searchedNumber;
}
//console.log(aleatoryNumber (0,500))
searchedNumber = aleatoryNumber(0,500);
let nbOfAttempts = 0;
const game = {
    nbOfAttemps:nbOfAttempts,
    searchedNumber: aleatoryNumber,
}

console.log(searchedNumber)
let userInput;
//##Faire une fonction pour jouer
//On pourrait regrouper les instructions de notre jeu dans une fonction play.

function play() {
    userInput = prompt("Saisissez un nombre entre 0 et 500");
    while (userInput !== searchedNumber) {  // Tant que l'input de l'user n'est pas égal à la cible, on lit la boucle
        if (userInput === null) { // Si l'utilisateur a cliqué sur annuler
            break; // Je sors de ma boucle
        }

        userInput = parseInt(userInput);
        // /!\ Le prompt ARRETE l'execution du code tant que l'utilisateur n'a pas rentré de valeur
        nbOfAttempts++; // nbOfAttempts = nbOfAttempts + 1;
        
        if (userInput < searchedNumber) { // - Si la saisie est trop petite
            alert("C'est plus !");
        }
        
        if (userInput > searchedNumber) { // - Si la saisie est trop grande
            alert("C'est moins !");
        }
    }

        if (userInput !== null) {
        alert(`Gagné en ${nbOfAttempts} coups !`); // alert("C'est gagné !" + " En " + nbOfAttempts + " coups");
        
    }   else {
        alert("Vous ne voulez plus jouer... Dommage :'(");
    }
}


let gameresult = nbOfAttempts;
const gameResults = [gameresult, gameresult++]

console.log(gameresult)
console.log(gameResults)

do {
    play();
    
    
}
    while (confirm("Voulez-vous rejouer?"));
        
    
console.log(confirm)

//On adaptera nos instructions pour utiliser l'objet déclaré précedemment.

//On executera cette fonction une première fois pour lancer le jeu.


//Faire une fonction pour le nombre aléatoire
//On va déclarer une fonction pour la génération du nombre aléatoire.

//Cette fonction doit prendre 2 paramètres min et max et retourner le nombre aléatoire compris entre min et max

//On pourra executer cette fonction là où on a besoin de générer le nombre aléatoire en définissant la plage de recherche, par exemple de 10 à 20. Tiens d'ailleurs on pourrait stocker ces valeurs dans notre objet de configuration.


//##Stocker les scores
//On pourrait mettre de côté les scores dans un tableau.

//Dès qu'on remporte une victoire, on vient mémoriser le nombre d'essais dans ce tableau.

//On pourrait afficher ce tableau dans la console avec console.log pour visualiser tous les scores dès que la partie se termine.

//Puis on relance une partie en executant à nouveau notre fonction play


// Le nombre max
//var max = 500; 

// Le nombre saisi
//var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
//var attemps = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
//while (enteredNumber !== searchedNumber) {
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    //if (enteredNumber < searchedNumber) {
      //  enteredNumber = parseInt(prompt('C\'est plus'));
    //}
    //else {
       // enteredNumber = parseInt(prompt('C\'est moins'));
    //}
    // on incrémente le nombre d'essais
   // attemps += 1;
//}

// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
//alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);
