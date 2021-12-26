const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// ? jika file tidak ada akan dicreate
// ? jika sudah semua isinya akan direplace, kecuali param flag='a'
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('done');
console.log('starting the next one');
