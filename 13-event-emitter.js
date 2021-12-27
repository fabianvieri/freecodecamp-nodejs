// ? EvenetEmitter sebuah class
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// ? method on untuk mulai listen ke event, param -> (nama event, cb)
// ? methodnya on bisa diulang
customEmitter.on('response', (name = 'Susan', id = 1) => {
  console.log(`data recived user ${name} with id ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response');
customEmitter.emit('response', 'John', 34);
