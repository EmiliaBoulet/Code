const { Tag } = require('../models');


const tagsController = {

    async tagsPage(req, res) {
      

        
        try {

            // Visualiser les titres, les descriptions et les auteurs des quiz sur la page d’accueil
            const tags = await Tag.findAll();
            // console.log("tagsInfo: ", tagsInfo);

            res.render('tags', {tags});
            
        } catch (err) {
            console.error(err.message);
            return null;
        }



    }

}


module.exports = tagsController;