
const array= [['country','chile'],['sex','male']]
console.log(array); // => [ [ 'country', 'chile' ], [ 'sex', 'male' ] ]
console.log(Object.fromEntries(array)); // => { country: 'chile', sex: 'male' }
//el método fromEntries convierte un array de arrays en un objeto, funciona al revés que el método entries