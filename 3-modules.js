// modules
// ? commonjs(library yang digunakan node untuk system module)
// ? every file is a module by default
// ? modules = encapsulated code (only share what we want)
// ! khusus untuk module yang kita buat sendiri requirenya harus diawali dengan .
// ! misal ./ atau ../, karena untuk membedakan dengan module built-in/npm
// ! saat file/module direquire semua yang ada di file itu diexecute
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-module');
require('./7-mind-grenade');

console.log(names, data);

sayHi(names.john);
sayHi(names.peter);
