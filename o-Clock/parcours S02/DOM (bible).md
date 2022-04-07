## DOM
<br>
C'est un objet qui représente l'intégralité de ma page web.
Cet objet est manipulable dans le JavaScript via l'objet "document".


Astuce: `console.dir(document);` me donne l'intégralité des propriétés de mon DOM.


On veut pouvoir récupérer un élement de la page via le JS


HTML, CSS et JS sont les ingrédients pour construire le DOM (le gateau).

Donc HTML = charpente, CSS = habillage ; JS = dynamisme ?

RECAP:
On va modifier notre page web grâce à l'interface que propose l'objet 'document'.
'document' qui représente mon DOM. 

Quand il y a une modification sur document, Chrome l'interprête et met à jour le rendu de la page. (dans votre dos, vous n'avez rien à faire)
<br>

<br>



```js
// ----------------------------------------------
// ----------------- SELECTOR -------------------
// ----------------------------------------------

// 1. Selectionner un élément par son ID
    const fruitListElement = document.getElementById("fruit-list");
    fruitListElement.style.color = "#F0F";


// 1.note. Si l'élément selectionné n'existe pas
    const notExistingElement = document.getElementById("g-pas-la-ref");
    console.log(notExistingElement); // null
    // notExistingElement.style.color = "red"; Erreur typique, on a pas vérifier si l'élément est bien définie // dom.js:10 Uncaught TypeError: Cannot read properties of null (reading 'style')


// 2. Selectionner DES éléments par leur classe
    const fruitElements = document.getElementsByClassName("fruit");
    console.log(fruitElements);

// 3. Selectionner DES éléments par leur tag
    const buttonElements = document.getElementsByTagName("button");
    const buttonElement = buttonElements[0];
    console.log(buttonElement);

// 4. (générique) Selectionner UN élement
    document.querySelector("#fruit-list"); // mon ul avec l'ID fruit-list = #
    document.querySelector(".fruit"); // Le premier élément qui a une classe .fruit = .
    document.querySelector("button"); // Le premier button de la page

// 5 (générique) Séelectionner PLUSIEURS éléments
    const fruitElementsBis = document.querySelectorAll(".fruit"); // Selectionne tous les éléments avec la classe .fruits
    console.log(fruitElementsBis.length); // 4
    // et je peux même faire une boucle avec ces éléments

````

// Query selector complexe :

console.log(document.querySelector(".fruit.kiwi"));
console.log(document.querySelector("#fruit-list .kiwi"));



// ----------------------------------------------
// ------- UN PEU DE MANIPULATION DE DOM --------
// ----------------------------------------------

// 1. Changer le style d'un élément
// Note: En pratique, changer le style on le fait pas si souvent.
    const kiwiElement = document.querySelector(".kiwi");
    kiwiElement.style.backgroundColor = "rgb(100, 255, 0)";
    kiwiElement.style.textDecoration = "underline";
    kiwiElement.style.fontWeight = "bold";


// 2. Changer les classes d'un élément
    const poireElement = document.getElementById("poire");
    poireElement.classList.add("hidden"); // A noter, on aurait pu faire : poireElement.style.dislay = "none";
    poireElement.classList.remove("fruit");

// 3. Modifier le texte d'un élément du DOM
    kiwiElement.textContent = "Kiwi 🥝"; 
    kiwiElement.innerText = "Kiwi 🥝🥝"; // Similaire à la commande précédent
    kiwiElement.innerHTML = "Kiwi 🥝🥝 <s>barré</s>"; // Le HTML présent sera rendu comme du HTML
    // kiwiElement.innerText = "<em>Coucou</em>"; // Va écrire <em> sur la page => on veut pas

// 4. Insérer des nouveaux éléments dans le DOM
    const childElement = document.createElement("p"); // Créer l'élément à ajouter (enfant)
    childElement.innerText = "Je suis un paragraphe !";
    const parentElement = document.querySelector("ul"); // Selectionner l'élément (parent) dans lequel on va ajouter l'élément justement créé
    parentElement.appendChild(childElement); // Ajouter l'enfant dans le parent


// 5. Supprimer du texte
    const bananeElement = document.querySelector("li:first-child"); // Selectionne le li qui est le premier element de son parent
    bananeElement.innerHTML = "";

// 6. Supprimer tous les éléments d'une balise
    // /!\ SI impossible de le faire d'un seul coup /!\
    // Selectionner la balise, puis en supprimer chaque élément 
    const selectAllSquares = document.querySelectorAll(".square");// sélectionner la div "square"
    const squareLength = selectAllSquares.length; //définir la longueur des élements square
    for (let i = 0; i < squareLength; i++)// pour chaque div square
        {selectAllSquares[i].remove();}// supprimer le 1er élément

    // Sinon, si la balise parent existe déjà dans le HTML ==> remise à jour de l'élément de HTML
    //Exemple: la DIV "square" à comme parent une DIV avec l'ID "board"(déjà présente sur le HTML)
    const invaderElement = document.getElementById("board");
    invaderElement.innerHTML = "";

// Tout le reste, ça se google-ise!
```