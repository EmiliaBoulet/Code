/**
 * Propriétés : 
 *  -nbWheels, enginePower, isStarted
 * 
 * Methodes :
 *  - constroctor (nbWheels, enginePower) => isStarted est false par défault
 *  - getter et des setter pour toutes les propriétés (pas de conditions particulère dans les setters)
 *  - start() et stop()
 *  - toString() -> "Vhéicule à X roues, de pussance Y, {est démarré | n'est pas démarré}"
 *  - si vous avez fini en avance -> Des conditions de votre imagination dans les setters
 */

class Vehicule {

    #nbWheels;
    #enginePower;
    #isStarted;

    Constructor(nbWheels, enginePower) {
        this.#nbWheels = nbWheels;
        this.#enginePower = enginePower;

        this.#isStarted = false;
    }

    set nbWheels(value) {
        this.#nbWheels = value;
    }

    get nbWheels() {
        return this.#nbWheels;
    }

    set enginePower(value) {
        this.#enginePower = value;
    }

    get enginePower() {
        return this.#enginePower;
    }

    get isStarted() {
        return this.#isStarted;
    }


    start() {
        this.#isStarted = true;
    }

    stop() {
        this.isStarted = false;
    }

    toString() {

        return `Véhicule à ${this.nbWheels} roues,
    avec un moteur de ${this.enginePower} chevaux,
    ${this.#isStarted ? `est démarré` : `n'est pas démarré`}`;
    }

}

let v1 = new Vehicule(4, 400);
let v2 = new Vehicule(4, 110);

console.log(v1.toString());

v1.start();

console.log(v1.toString());

const tesla = new Vehicule(4, 350);
tesla.start();
tesla.toString();
console.log(tesla.toString());