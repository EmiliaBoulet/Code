const http = require('http');

// nos modules
const ucfirst = require('./modules/ucfirst');
// Importer les modules que vous
const helpers = require('./modules/helpers');

const server = http.createServer();

server.on('request', function (req, res) {
    res.write(`<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>test</title>
    </head>
    <body>`);

    res.write(ucfirst('ok\n'));

    res.write(ucfirst(12));

    res.end();
});

const port = 3000;

server.listen(port, function () {
    console.log(`listening on http://localhost:${port}`);
});
