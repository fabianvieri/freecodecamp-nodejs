const http = require('http');

// ! res.end() -> tidak langsung keluar dari function masih lanjut baca code kalau ada
// ! res.end() -> cuma bisa sekali dicall
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('welcome to our aboutpage');
  } else {
    res.end(`
    <h1>404: service ${req.url} not found </h1>
    <a href="/">back to homepage</a>
  `);
  }
});

server.listen(5000);
