// ton code ici
//On va d'abord créer des élements en Javascript pour créer une grille de 8 cases x 8 cases
// Ajouter une DIV au HTML en passant par le JS

// Faire une fontion pour créer les cases

function generateSquare(ulElement) {
    var liElement = document.createElement("li");
    var parentElement = ulElement;
    parentElement.appendChild(liElement);
    liElement.classList.add("default");

}

function generateLigns(formResult){
    var ulElement = document.createElement("ul");
    var parentElement = document.querySelector("main");
    parentElement.appendChild(ulElement);
    ulElement.classList.add("ligns");

    for (var i = 0; i < formResult; i++) {
        generateSquare(ulElement);}
}

//Faire une boucle pour que cela se répète 64 fois

//On va maintenant s'occuper de pouvoir changer la couleur des pixels
//Si on clique sur un pixel on le fait passer en blanc

//On sélectionne les élements de la classe "default"

//On crée une boucle for pour répeter sur toutes les cases

function generateBoard(formResult) {

    for (var i = 0; i < formResult; i++) {
    generateLigns(formResult);
}
var liElement = document.getElementsByClassName('default');
for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener('click', function () {
        console.log(liElement[i].style);
        //Si l'élement est blanc, on le passe en noir
        if (liElement[i].style.backgroundColor === "lightgrey") {
            liElement[i].style.backgroundColor = "black"

        } else {
            liElement[i].style.backgroundColor = "lightgrey";
        }
    });
}
}

// Lorsqu'on soumet le formulaire on veut générer une nouvelle grille à la place de la grille actuelle, mais en tenant compte de la taille saisie dans le champ
// Par exemple l'utilisateur saisit 10 dans le champ, il valide, une nouvelle grille de 10 cases x 10 cases est générée à la place de la grille existante


//Il faut qu'on crée une variable pour récupérer le contenu du champ du formulaire.


// Il faut qu'on ajoute un eventlistener sur le bouton.
var buttonClick = document.getElementById("button");

buttonClick.addEventListener('click', function (event) {
    event.preventDefault();
    var formResult = document.getElementById("sizeofgrid").value;
    console.log(formResult);
    formResult = parseInt(formResult, 10);
    generateBoard(formResult);
    console.log("cliqué sur le bouton" );
});
//Il faut qu'on récupère les entrées du formulaire en nombre pour les ajouter en paramètres de notre fonciton de création de grille.


