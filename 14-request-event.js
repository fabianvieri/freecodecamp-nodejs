const http = require('http');

const server = http.createServer();

// ? cara listen menggunakan eventemitter
// ? request -> built-in event dari module http, jadi dioverwrite di bawah
// ? request -> untuk listen setiap request ke server
server.on('request', (req, res) => {
  res.end('welcome');
});

server.listen(5000);
