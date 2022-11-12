const lista = new Set();

lista.add('item 1')

//encadenando elementos para añadirlos a la lista
lista.add('item2').add('item3').add('item4');

console.log(lista);


//-----METODO PARA QUITAR ELEMENTOS REPETIDOS DE UN ARRAY UTILIZANDO SET


const array = [1, 1, 2, 2, 3, 4, 4, 5]
// 1. Convertir de Array a Set
const set = new Set(array) // Set(5) {1, 2, 3, 4, 5}
// 2. Convertir de Set a Array
const arraySinRep = Array.from(set) // [1, 2, 3, 4, 5]
// 3. Propagar los elementos del Array dentro de otro Array
const sinRepetidos = [ ...arraySinRep] // [1, 2, 3, 4, 5]

console.log(array);
console.log(arraySinRep);