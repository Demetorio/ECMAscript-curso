let anotherNumber = 1;
let validate = anotherNumber ?? 5;
console.log(validate); //RESULTADO : 1;

anotherNumber = null;
validate = anotherNumber ?? 5
console.log(validate); //RESULTADO: 5;

//El operador ?? valida si un valor es nulo, si lo es devuelve el valor que definamos despues del operador, en este caso 5;