const { User, Quiz, Question, Tag, Answer } = require('../models');



const quizController = {

    async quizzesPage(req, res) {

        try {

            const tagId = req.params.id;
            const quizzesAll = await Quiz.findAll({
                include:[{
                    model: Tag,
                    as : 'tags',
                    attributes : ['id','name'],
                    where: {id : tagId}
                 }],
                 
            });

            // console.log('-------------------------------------------------',quizzesAll);
            // res.json(quizzesAll) 
            
            res.render('quizzes', {title : 'Quizzes', quizzesAll});

        } catch (err) {
            console.error(err.message);
            return null;
        }

    },

    async quizPage(req, res) {
      

        try {

            const quizId = req.params.id;
            const quizInfos = await Quiz.findByPk(quizId,{
            
                   include: [{
                        model: Question,
                        as : 'questions',
                        include: ['level', 'good_answer',
                        {
                            model: Answer,
                            as: 'answers',
                            attributes : ['id','description']
                        }]

                     }, {
                        model: Tag,
                        as : 'tags',
                        attributes : ['id','name']
                     }, {
                        model: User,
                        as : 'user',
                        attributes : ['firstname', 'lastname']
                     } ],

            });
            
            // res.json(quizInfos);
            res.render('quiz',{quizInfos});
            
        } catch (err) {
            console.error(err.message);
            return null;
        }

    }

}

module.exports = quizController;