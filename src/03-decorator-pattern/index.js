const Car = require('./context/car')
const Package = require('./decorator/package')
const Insurance = require('./decorator/insurance')

const miniCooper = new Car();
Package(miniCooper)
Insurance(miniCooper)

const volvo = new Car();
Insurance(volvo)

console.log('Cost of mini cooper:' + miniCooper.cost());
console.log('Cost of volvo:' + volvo.cost());

