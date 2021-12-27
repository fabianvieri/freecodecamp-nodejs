const { createReadStream } = require('fs');

// ? stream digunakan untuk proses data yang besar
// ? karena tidak semua data yang diload akan masuk ke memory
// ? ada kemungkinan proses jadi lambat atau memori tidak cukup untuk load data yang besar
// const stream = createReadStream('./content/big.txt');

// ? highWaterMark -> max ukuran buffer
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf-8',
});

// ? ukuran file sekitar 169kb
// ? setiap buffer/chunk data by default 64kb, jadi log dibawah akan terprint 3x
// ? jadi datanya dibaca sedikit demi sedikit tergantung ukuran buffer
stream.on('data', (result) => {
  console.log('buffer');
  console.log(result);
});

stream.on('error', (err) => {
  console.log(err);
});
