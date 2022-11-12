
const a = 23423235235345345345456;
const b = 35634623465345634562346;
console.log(a+b); //RESULTADO: 5.905785870069097e+22

const c = BigInt('23423235235345345345456');
const d = BigInt('35634623465345634562346');
console.log(c+d); //RESULTADO: 59057858700690979907802n

//Con el BigInt podré hacer operaciones con numeros muy grandes y obtener el numero entero.
//OJO: Se deben ingresar como strings, sino variará en algunos digitos.