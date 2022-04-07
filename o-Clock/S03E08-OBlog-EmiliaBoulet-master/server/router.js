const express = require('express');
const router = express.Router();

const articles = require('../data/articles.json')

router.get('/', (req, res) => {
    res.render('index.ejs', { articles : articles});
    
});

router.get('/article/:id', (req, res) => {
    const idArticle = parseInt(req.params.id);
    const articleFound = articles.find(article => article.id === idArticle);
    res.render('articles', {articleFound});
});

router.get('/category/:category', (req, res) => {
    const categoryArticle = (req.params.category);
    const articleFiltered = articles.filter(article => article.category === categoryArticle);
    res.render('category', {articleFiltered});
});

router.post('/search', (req, res) => {
    const userSearch = req.body.searchArticle;
    const articleFiltered = articles.filter(article => article.title.includes(userSearch));
    console.log(articleFiltered);
    res.render('search', {articleFiltered});
});
module.exports = router;