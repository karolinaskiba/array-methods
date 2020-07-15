const data = require('./data');

const totalAge = data.reduce((acc, item)=> {return acc + item.age}, 0);
const averageAge = (totalAge/data.length).toFixed(2)
console.log(averageAge)