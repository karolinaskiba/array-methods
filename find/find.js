const data = require('./data');

const blueEyes = data.filter(({eyeColor})=> eyeColor.toLowerCase() ==='blue');
console.log(blueEyes)