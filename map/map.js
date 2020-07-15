const data = require('./data');

//const userList = data.map(item=>{return `NAME: ${item.name} | AGE: ${item.name} |  COMPANY: ${item.company}`})
const userList = data.map(({name, age, company})=>`NAME: ${name} | AGE: ${age} |  COMPANY: ${company}`)
console.log(userList)