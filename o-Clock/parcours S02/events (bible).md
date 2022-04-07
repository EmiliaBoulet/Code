```js

/* 1. Différence innerText / textContent */
const text = document.getElementById('content');

console.log(text.innerText);
console.log(text.textContent);


/* 2. Expliquer myVar += 'text' */
// avec des Number
let result = 0;
result += 1; // identique à  // result = result + 1  // result++

// avec des String
let myString = 'hello';
myString += ' world!'; // output: 'hello world!'
//myString = myString + ' world!';
console.log(myString);


/* 3. LES EVENTS */
// Syntaxe

// element.addEventListener(eventType, handler);
const myButtonAnonymous= document.getElementById("myBtnAnonymous");

// 1ère méthode : fonction anonyme
myButtonAnonymous.addEventListener('click', function() {
  console.log('Cliqué sur Anonymous !');
});
// 2nde méthode : référence de fonction
function handleClick() {
  console.log('Cliqué sur Ref !');
}
const myButtonRef= document.getElementById('myBtnRef');
myButtonRef.addEventListener('click', handleClick);

// Event bubbling, bouillonnement, bullage
document.getElementById('player').addEventListener('click', function() {
  console.log('player');
});

document.getElementById('app').addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('app');
});

document.body.addEventListener('click', function() {
  console.log('body');
});

// Empêche la soumission du formulaire
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // code

  form.submit(); // on soumet le form "manuellement"
});


//Bascule de on a off, puis on, puis off, puis on, puis off....
const getElementTarget = document.querySelectorAll(".square");// sélectionner la div sur laquelle on veut appliquer l'évènement 

for (const userFocus of getElementTarget){// pour tous les éléments de cette div
    
  userFocus.addEventListener('click', function (event) //ajouter un évènement par click
  {userFocus.classList.toggle("colorBlack")}); //rajoute/enlève la class "colorBlack" à square

}

```