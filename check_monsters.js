
const { AMEACAS } = require('./src/data/monsters.ts');

console.log('Total items:', AMEACAS.length);
const emptyItems = AMEACAS.filter(m => !m.nome || !m.tipo);
console.log('Empty or invalid items:', emptyItems.length);
if (emptyItems.length > 0) {
    console.log('First invalid item:', emptyItems[0]);
}

const types = {};
AMEACAS.forEach(m => {
    types[m.tipo] = (types[m.tipo] || 0) + 1;
});
console.log('Counts by type:', types);
