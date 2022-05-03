const User = require('../models/user');
const bcrypt = require('bcrypt');


const userController = {
    all: async (req, res) => {
        const users = await User.findAll();

        res.send(users);
    },
    get: async (req, res) => {
        const id = Number(req.params.id);

        if(!isNaN(id)) {
            const user = await User.findByPk(id);

            res.send(user);

            return;
        }


        res.status(404);
        res.send("Not found");
    },
    create: async (req, res) => {
         const body = req.body;

        try {
            const user = await User.create(body);

            res.send(user);
        } catch(err) {
            res.send(err);
        }
    },
    update: async (req, res) => {
        // on fait semblaint d'avoir un body
        const body = req.body;
        // Supprimer un niveau
        const id = Number(req.params.id);

        // Si id différent de NaN
        if(!isNaN(id)) {
            // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries
            const user = await User.update(body, { where: { id }});
            res.send(user);
            return;
        } 

        res.status(404);
        res.send("Not found");

    },
    delete: async (req, res) => {
        // Supprimer un niveau
          const id = Number(req.params.id);

          // Si id différent de NaN
          if(!isNaN(id)) {
              const user = await User.findByPk(id);
              user.destroy();
              res.send("He's gone");
              return;
          } 
  
          res.status(404);
          res.send("Not found");
    },

    async connexionPage(req,res){
        try {

            res.render('connexion');
            
        } catch (err) {
            console.error(err.message);
            return null;
        }
    },

    async signupPage(req,res){
        try {

            res.render('signup');
            
        } catch (err) {
            console.error(err.message);
            return null;
        }
    },

    async signed(req,res){
        try {

            let {lastname, firstname, email, password, passwordConfirm} = req.body;
            
            
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const hashConfirm = await bcrypt.hash(passwordConfirm, salt);
            
            if(hash === hashConfirm){

            await User.create({lastname, firstname, email, password : hash, passwordConfirm: hashConfirm});
            res.redirect('connexion');

             } else {

            res.send('Mot de passe, pas identique !');
            
             }

        } catch (err) {
            console.error(err.message);
            return null;
        }
    }

    
}

module.exports = userController;