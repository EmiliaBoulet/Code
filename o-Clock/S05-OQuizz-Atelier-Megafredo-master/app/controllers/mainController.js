const { Quiz } = require('../models');

const mainController = {

    async homePage(req, res) {
      

        
        try {

            // Visualiser les titres, les descriptions et les auteurs des quiz sur la page d’accueil
            const homeInfo = await Quiz.findAll({
                order: ['title'],
                include:[{
                    association: 'user'
                }]
            });

            res.render('home', {homeInfo});
            
        } catch (err) {
            console.error(err.message);
            return null;
        }



    }

}

module.exports = mainController;