// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.
const readline = require("readline");

// Hit parade, classé du premier au dernier.
const hitParade = [
    `Jain - Come`,
    `Matt Simons - Catch & Realease`,
    `Twety One Pilots - Stressed Out`,
    `Justin Bieber - Love Yourself`,
    `Kids United - On écrit sur les murs`,
    `Rihanna - Work`,
    `Julian Perretta - Miracle`,
    `Yall - Hundred Miles`,
    `Kendji Girac - No Me Mirès Màs`,
    `Feder - Blind (feat. Emmi)`
];

// Votre code va ici

const rl = readline.createInterface(
    process.stdin, process.stdout);


rl.question(askQuestion(), (answer) => {
    if (answer === ('chante')) {
        console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
        askQuestion();
    }
    else if (answer === ("classement")) {
        for (let valeur of hitParade) {
            console.log(valeur);
            askQuestion();
        };
    } else if (answer === ("quitter")) {
          rl.close();
        }
        else {
            console.log("Je n'ai pas compris votre demande.")
            askQuestion();
        }
          
    });

  rl.on('line', (input) => {
        console.log(`Received: ${input}`);
    });
  

   function askQuestion() {
        console.log("Que souhaitez-vous?");
    }

/*
rl.question(askQuestion(), (answer) => {

    if (answer === ('chante')) {
        console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock`);
        askQuestion();
    }
    if (answer === ("classement")) {
        for (let valeur of hitParade) {
            console.log(valeur);
            askQuestion();
        };
     }
        else {
            console.log("Je n'ai pas compris votre demande.")
            askQuestion();

        }
    });

rl.on('line', (input) => {
            console.log(`Received: ${input}`);
        });*/
