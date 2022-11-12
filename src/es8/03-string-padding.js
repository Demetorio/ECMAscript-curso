const string = 'hello';

//padStart
console.log(string.padStart(8,'ctm')); //RESULTADO: ctmhello

console.log(string.padStart(10,'ctm')); //RESULTADO: ctmcthello
console.log(string.padStart(6,'ctm')); //RESULTADO: chello

//PadStart: rellena el inicio del string

//PRIMER ARGUMENTO: La cantidad de letras del string incluyendo las del string que ya está.
//SEGUNDO ARGUMENTO: El string con el que se quiere rellenar.

//padEnd
console.log(string.padEnd(8,'ctm')); // RESULTADO: helloctm

console.log(string.padEnd(10,'ctm')); //RESULTADO: helloctmct

console.log(string.padEnd(6,'ctm')); //RESULTADO: helloc

//padEnd: rellena el final de string