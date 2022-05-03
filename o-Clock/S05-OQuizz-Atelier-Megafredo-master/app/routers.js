const express = require('express');
const levelController = require('./controllers/levelController');
const mainController = require('./controllers/mainController');
const questionController = require('./controllers/questionController');
const quizController = require('./controllers/quizController');
const tagsController = require('./controllers/tagsController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/quiz/:id', quizController.quizPage);
router.get('/quizzes/tag/:id', quizController.quizzesPage);

router.get('/tags', tagsController.tagsPage);

router.get('/connexion', userController.connexionPage);
router.get('/signup', userController.signupPage);
router.post('/signup', userController.signed);


router.get('/questions/create', questionController.getCreate);
router.post('/questions/create', questionController.doCreate);
router.get('/questions/edit/:id', questionController.getUpdate);
router.post('/questions/edit/:id', questionController.doUpdate);
router.get('/questions/delete/:id', questionController.delete);

router.get('/levels', levelController.all);
router.get('/levels/create', levelController.getCreate);
router.post('/levels/create', levelController.doCreate);

router.get('/levels/edit/:id', levelController.getUpdate);
router.post('/levels/edit/:id', levelController.doUpdate);

router.get('/levels/delete/:id', levelController.getDelete);
router.post('/levels/delete/:id', levelController.doDelete);

router.get('/levels/:id', levelController.get);

module.exports = router;