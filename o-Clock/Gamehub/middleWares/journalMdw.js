const dayjs = require('dayjs');


function journalMdw(req, res, next) {

   //let now = daysjs().format();
    const requestedUrl = req.url;
    //res.send(requestedUrl);
   const timeOfRequest = dayjs().format('DD-MM-YYYY - HH-mm-ss');
   const userIp = req.ip;
   
    console.log('[ ' + timeOfRequest + ' ' + userIp + '] ' + requestedUrl);

      next();
  }
  
  module.exports = journalMdw;
 
