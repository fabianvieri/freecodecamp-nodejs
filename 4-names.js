// local
const secret = 'Super Secret';
// share
const john = 'john';
const peter = 'peter';

// ? module sebuah object
// ? di dalam object module ada props namanya exports yang juga object
// ? hanya yang di dalam exports yang bisa diakses di file lain
// console.log(module);

module.exports = { john, peter };
