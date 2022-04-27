const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('cv.ejs');
    });

module.exports = router;