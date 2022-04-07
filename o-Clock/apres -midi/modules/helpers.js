// Créer une fonction qui permet d'ajouter la TVA à un prix HT
const addTva = (prixHt) => {
    // if (isNaN) return; // guard
    // return priceHT * 1.2;

    if (!isNaN(prixHt)) {
        // return en meme temps que retourner une valeur
        // va couper l'exécution du code : pas besoin de else
        return prixHt * (1 + 0.2);
    }

function formatPrice(priceHT) {
    return addTva(priceHT).toFixed(2);
}




// Créer une fonction qui permet d'afficher un prix TTC

// Il faudra exporter les deux fonctions
module.exports = {addTva, formatPrice}