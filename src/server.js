import app from './app.js'

const http = require('http')
const https = require('https')
const host = 'localhost'
const httpPort = 8007
const httpsPort = 8008

let count = 0;
const cb = () => {
  if (++count === 2) {
    console.log(`Http Server on: http://127.0.0.1:${httpPort}/`);
    console.log(`Https Server on: http://127.0.0.1:${httpsPort}/`);
  }
};
http.createServer(app.callback()).listen(httpPort, cb);
https.createServer(app.callback()).listen(httpsPort, cb);

