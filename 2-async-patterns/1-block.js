const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('home page');
  } else if (req.url === '/about') {
    //  BLOCKING CODE
    // ! simulasi user akses blocking, buka 2 tab akses about
    // ! di tab lain akan ikut loading juga menunggu /about selesai
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(j, i);
    //   }
    // }
    res.end('about page');
  } else {
    res.end('404: not found');
  }
});

server.listen(5000, () => {
  console.log('Server listening on port : 5000....');
});
