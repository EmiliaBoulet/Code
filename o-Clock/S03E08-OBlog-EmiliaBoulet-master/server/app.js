const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'front/views');
app.use(express.static('front/assets'));
app.use(express.urlencoded({extended: true}));
const router = require('./router');

app.use(router);

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

module.exports = app;