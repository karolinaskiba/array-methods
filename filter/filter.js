const data = require('./data');

const famale = data.filter(({gender})=>gender === 'female');
const male=data.filter(({gender}) => gender ==='male')
console.log(famale);