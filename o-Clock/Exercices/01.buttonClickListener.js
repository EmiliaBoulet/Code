// Etape 1 - En cas de click sur le bouton défini dans le HTML, 
// faire en sorte que le texte de celui-ci change et devienne "Bingo !".
/*const buttonElement = document.getElementById("my-button");
buttonElement.addEventListener("click", userClick);
let userClick = function(){
buttonElement.innerText = "Bingo !"
}

console.log(userClick)*/


const myButtonAnonymous= document.getElementById('my-button');

myButtonAnonymous.addEventListener('click', function() {
    myButtonAnonymous.innerText = "Bingo !"
    console.log('Cliqué sur Anonymous !');
  });

  