const data = require('./data');

const ageOfMale = data
.filter(item=>{return item.gender ==='male'})
.reduce((acc, item)=>{ return acc + item.age}, 0);

console.log(ageOfMale)