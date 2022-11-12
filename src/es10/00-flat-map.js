//flat
const array = [1,1,2,3,4 ,[1,3,4 ,[1,5,9,[3,6,7]]]];
console.log(array.flat(1));
//*El atributo flat "aplana" la cantidad de subniveles que nosotros indiquemos en el argumento
 
//flatMap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2])); /*RESULTADO => [
    1, 2, 2, 4,  3,
    6, 4, 8, 5, 10
  ] El resultado me ha impreso cada elemento del array acompañado de su multiplicación x2*/


