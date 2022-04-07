const dayJs = require('dayjs');
const express = require('express');
const capitalCities = require('./capitalCities');
const router = require('./router');

//dayjs.extend(utc)
//dayjs.extend(timezone)

//dayjs.tz("2014-06-01 12:00", "America/New_York")

//dayjs("2014-06-01 12:00").tz("America/New_York")

const app = express();
app.set('port,3000');
app.set('baseUrl,"http://localhost"');
app.use(router);


console.log(router);

