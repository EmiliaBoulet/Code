const options = {
    root: __dirname + '../views',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
        'secret-cookie': 'testing',
    },
};

module.exports = options;