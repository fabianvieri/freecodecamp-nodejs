const path = require('path');

// ? platform separator for path
console.log(path.sep);

// ? otomatis menggunkan separator dari platform yg digunakan
const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

// ? akses last portion dari path (test.txt)
const base = path.basename(filePath);
console.log(base);

// ? absolute path pakai resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
