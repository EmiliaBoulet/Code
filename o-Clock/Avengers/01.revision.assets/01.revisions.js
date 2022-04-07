// -------- PART 1: DATA ---------

// Créer une liste d'objets pour représenter les données suivantes : 
// PS : le nom des clés est à votre convenance.



/*                 -- Liste des "étudiants" de la promotion AVENGER ---

|    Speudonyme    | Naissance  |   Job                       |    Equipements               | Lien de l'image 
|--------------------------------------------------------------------------------------------------------------
| Captain America  | 1917       | Agent Fédéral              | Bouclier ; Moto ; Costume     | captain-america.png
| Spiderman        | 1962       | PDG de Parker Industries   | Toile ; Précognition          | spiderman.png
| Hulk             | 1962       | Physicien nucléaire        | Force ; Petit short moulant   | hulk.png
| Iron Man         | 1963       | PDG de Stark Industries    | Armure ; Répulseurs d'énergie | iron-man.png
| Thor             | 1962       | Médecin                    | Gros marteau                  | thor.png
|--------------------------------------------------------------------------------------------------------------
*/

const avengersStudent = {
    captainAmerica : {
        pseudo:         "Captain America",
        birthDate:      1917,
        job:            "Agent Fédéral",
        equipments:     ["Bouclier", "Moto", "Costume"],
        imageSource:    "captain-america.png"
    }, 
    spiderman : {
        pseudo :        "spiderman",
        birthDate :     1962,
        job :           "PDG de parker Industries",
        equipements :   [ "toile", "précognition"],
        imageSource :   "spiderman.jpg"
    },
    hulk : {
        pseudo:         "Hulk",
        birthDate:      1962,
        job:            "Physicien nucléaire",
        equipments:     ["Force", "Répulseurs d'énergie"],
        imageSource:    "hulk.png",
    },
    ironMan : {
        pseudo:         "Iron Man",
        birthDate:      1963,
        job:            "PDG de Stark Industries",
        equipments:     ["Armure", "Répulseurs d'énergie"],
        imageSource:    "iron-man.png",
    },
    thor : {
        pseudo:         "Thor",
        birthDate:      1962,
        job:            "Médecin",
        equipments:     ["Gros marteau"],
        imageSource:    "thor.png"
    }     
};
console.log(avengersStudent);


// -------- PART 2: DOM ---------



// Insérer chaque "étudiant" dans le DOM via une boucle JS. 
// Un template pour le HTML de chaque "étudiant" nous est aggréablement fourni par un designer/intégrateur de l'équipe marketing ! 
// On peut le retrouver dans le fichier HTML.
 for (let i = 0; i < 4; i++){
const divElement = document.getElementById("student");
divElement.innerHTML = ("<div class="recto">
<div class="container">
    <img id="image" src="./01.revision.assets/placeholder-hero.png">
    <div class="overlay"></div>
    <h1 id="nameOfStudentRecto">{{NAME OF THE STUDENT}}</h1>
</div>
</div>
<div class="verso">
<h2 id="nameOfStudentVerso">{{NAME OF THE STUDENT}}</h2>

<div id="birthDate">Année de création : {{XXXX}}</div>
<div id="job">Métier : {{YYYYYY}}</div>
<div>
    Équipement :
    <ul>
        <li id="equipment1">{{EQUIPEMENT1}}</li>
        <li id="equipment2">{{EQUIPEMENT2}}</li>
        <li id="equipment3">{{EQUIPEMENT3}}</li>
    </ul>
</div>
</div>")

 }


 }



 


const imageSourceElement = document.getElementById("image");
imageSourceElement.src = "./01.revision.assets/" + avengersStudent.captainAmerica.imageSource;
console.log(imageSourceElement);


const nameOfStudentRectoElement = document.getElementById("nameOfStudentRecto");
nameOfStudentRectoElement.innerText = avengersStudent.captainAmerica.pseudo;
console.log(nameOfStudentRectoElement);


const nameOfStudentVersoElement = document.getElementById("nameOfStudentVerso");
nameOfStudentVersoElement.innerText = avengersStudent.captainAmerica.pseudo;


const birthDateElement = document.getElementById("birthDate");
birthDateElement.innerText = avengersStudent.captainAmerica.birthDate;
console.log(birthDateElement);


const equipment1Element = document.getElementById("equipment1");
equipment1Element.innerText = avengersStudent.captainAmerica.equipments[0];
console.log(equipment1Element);


const equipment2Element = document.getElementById("equipment2");
equipment2Element.innerText = avengersStudent.captainAmerica.equipments[1];
console.log(equipment2Element);


const equipment3Element= document.getElementById("equipment3");
equipment3Element.innerText = avengersStudent.captainAmerica.equipments[2];
console.log(equipment3Element);

const cardElement = document.createElement("div")
const parentElement = document.getElementById("avenger");
parentElement.appendChild(cardElement);
parentElement.classList.add("student");



// Une fois les éléments insérés : si vous ne voyez pas toutes les informations s'afficher, c'est normal. 
// On ne voit que le 'recto' des cartes et on verra le 'verso' après avoir réalisé l'étape 3.


// -------- PART 3: LISTENERS ---------

// Lors du survol avec la souris de CHAQUE étudiant :
//     on ajouter à la div `.avenger` une nouvelle classe `.hovered`
// Idem, lorsque l'utilisateur RETIRE sa souris de CHAQUE étudiant :
//     on retire la div `.hovered`

// NB: dans la "vraie" vie, ce genre d'effet visuel pourrait se faire uniquement en CSS (sans JS). Ici c'est pour l'exemple, et la gloire.


// -------- PART 4: FORM ---------

// Dans le HTML ajouter un formulaire avec :
// - un input de type text
// - un input de type submit

// Lorsque l'utilisateur soumet le formulaire, on récupère le texte entré, et on l'affiche en console.
// Note: le 'style' du formulaire n'a AUCUNE importante. Mais faites vous plaisir si vous le souhaitez !


// -------- PART 5: ALGO ---------

// Filtrer uniquement les "étudiants" dont le speudonyme contient le texte entré par l'utilisateur.
// Par exemple, si l'utilisateur tape 'man', on veut récupérer `Spiderman` et `Iron Man` (attention aux majuscules donc ;)) 
// Par exemple, si l'utilisateur tape 'lk', on veut récupérer `Hulk`
// Par exemple, si l'utilisateur tape 'coucou', on veut récupérer un tableau vide.

// Pour cela compléter la fonction suivante:

/**
 * @param {string} searchText 
 * @returns {Array<object>}
 * 
 */
function filterHeroes(searchText) {
    // TODO: implémenter cette fonction
}
// Vérifier en console loggant uniquement les étudiants demandés par l'utilisateur lorsque celui-ci soumet le formulaire.



// -------- PART 6: WRAP UP ---------

// Toujours lorsque l'utilisateur soumet le formulaire, remplacer cette fois la liste de tous les étudiants déjà affichés dans le DOM, par uniquement ceux recherchés par l'utilisateur.

// Exemple : si l'utilisateur cherche "Spider", on lui affiche uniquement Spiderman !
// Trop fort on a fait un moteur de recherche !
