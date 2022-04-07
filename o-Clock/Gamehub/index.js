const express = require('express');
const app = express();
const dayjs = require('dayjs');
//
const games = require('./games.json');
// app.locals.games met a dispo dans les vues une variable games
app.locals.gamesJson = games;
const page404 = require('./middleWares/page404');
const journalMdw = require('./middleWares/journalMdw');

// -   Le moteur de rendu.
app.set('view engine', 'ejs');
// -   Le dossier des views.
app.set('views', 'views');
// -   Les fichiers du dossier `public` sont des fichiers _statiques_.
app.use(express.static('public'));


app.use(journalMdw);
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/game/:nomDuJeu', (req, res) => {
    
    const gameName = req.params.nomDuJeu;


    const currentGame = games.find((element) => element.name === gameName);

    res.render(currentGame.name, { cssFile: currentGame.cssFile });
});

app.use(page404);

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});