//arrays destructuring

let fruits = ['apple','banana'];
let [a,b] = fruits;
console.log(a, b);

//RESULTADO: apple banana 

/*let fruits = ['apple','banana'];
let [a,b] = fruits;
console.log(a, fruits[1]); otra forma de hacer destructuring de arrays*/ 



//object destructuing

let user = {username: 'aldo', age: '24'};
let {username, age} = user;
console.log(username,user);

//RESULTADO: aldo 24

/*let user = {username: 'aldo', age: '24'};
let {username, age} = user;
console.log(username,user.age); otra forma de hacer destructuring de objetos*/



//spread operator

let person = {name: 'alonso', age: 34, sex: 'male'};
let job = {ocupation: 'bus driver', salary: '1400 clp',experience : '2 years'};

let data = {id: 1, ...person, ...job}
console.log(data); 
/* RESULTADO: {
    id: 1,
    name: 'alonso',
    age: 34,
    sex: 'male',
    ocupation: 'bus driver',
    salary: '1400 clp',
    experience: '2 years'
  } la variable data ME HA COMBINADO TODOS LOS OBJETOS*/ 




  
//rest

function numbers (num, ...values) {
    console.log(num);
    console.log(values);
    console.log(num + values[0]);
}
numbers('number1',' value1 ',3,4,5,6);

/* RESULTADOS
number1 <--- CORRESPONDE AL VALOR DE num
[ ' value1 ', 3, 4, 5, 6 ] <--- CORRESPONDEN A LOS VALORES DE values
number1 value1 <--- CORRESPONDE A LA SUMA DE num Y EL PRIMER ELEMENTO DE values*/ 


//AUNQUE LA SINTAXIS DE SPREAD Y REST SON SIMILARES, SUS FUNCIONES SON DISTINTAS, EN SPREAD, EL OBJETO QUE ALMACENA LA INFORMACIÓN DE LOS OBJETOS ORIGINALES SE "EXPANDE", POR LO TANTO SPREAD SYNTAX DESESCTRUCTURA EL OBJETO O ARRAY ORIGINAL
//EN REST, SE CREA UN PARAMETRO REST Y ESTE ENCAPSULA LOS VALORES QUE EL USUARIO DEFINE EN LOS ARGUMENTOS