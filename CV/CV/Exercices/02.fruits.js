const brocoliHover = document.getElementById('brocoli');
console.log(brocoliHover)
brocoliHover.addEventListener('mouseenter', function() {
    brocoliHover.classList.add("filled");
    
});
console.log(brocoliHover)



// ----- Partie 2 -----

// Faire en sorte que :
// Pour chaque fruit (ie. chaque div), 
//   lorsque l'utilisateur SURVOLE le fruit avec sa souris, on ajoute la classe 'filled' à ce fruit.


//console.log(fruitsHover)
const fruitsHover = document.getElementsByClassName('fruit');
//fruitsHover.addEventListener('mouseover', function() {
  //  fruitsHover.classList.add("filled");
//})
const fruitslength = fruitsHover.length;


for( let i = 0 ; i < fruitslength; i++) {
   fruitsHover[i].addEventListener('mouseover', function() {
    fruitsHover[i].classList.add("filled");
  console.log(fruitsHover);
});
}


// ----- Partie 3 -----

// Faire en sorte que :
// Pour chaque fruit (ie. chaque div), 
//   lorsque l'utilisateur RETIRE sa souris après un survol, on retire la classe 'filled' de ce fruit.

for( let i = 0; i < fruitslength; i++) {
    fruitsHover[i].addEventListener('mouseleave', function() {
    fruitsHover[i].classList.remove("filled");

});
}


for( let i = 0 ; i < 62; i++) {
  liElement[i].addEventListener('click', function() {
      liElement[i].style.backgroundColor = "white";
  console.log(liElement);
});
}