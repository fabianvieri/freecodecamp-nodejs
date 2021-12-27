const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    //   ? versi tanpa stream
    // const text = fs.readFileSync('./content/big.txt', 'utf-8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', (data) => {
      // ? pipe sama kyk pipe di command linux ||,
      // ? setelah proses read stream dilanjut dengan write stream
      // ? res obj by default writable stream
      fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
