const http = require('http');

const server = http.createServer();

const port = 5000;

server.on('request', function (req, res) {
    res.write('ok');

    res.end();
});

server.listen(port, function () {
    console.log(`server started on http://localhost:${port}`);
});