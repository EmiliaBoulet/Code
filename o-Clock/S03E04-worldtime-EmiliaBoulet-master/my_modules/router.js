const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {
    res.send('hello');
    res.sendFile('index.html', options);

});
router.get('/cities/:name', (req, res) => {
    console.log(req.params);

    res.send(`<p>Bonjour ${req.params.name} !!</p>`);
});

module.exports = router;

