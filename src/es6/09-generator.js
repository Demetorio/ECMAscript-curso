//función generator
function* generatorfunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'

    return 'The Oracle'
}

//el operador yield funciona como un return, pero a diferencia de este no rompe la ejecución de la función, sino que la función se sigue ejecutando para el codigo que está debajo de yield

//creación de la variable que funcionará como un objeto generator
const generator = generatorfunction();


//el atributo .next muestra la información que está junto a los yields

//el primer generator mostrara un objeto JSON, con el atributo value, y el atributo done, hará lo mismo con los demas
console.log(generator.next()); // RESULTADO --> { value: 'Neo', done: false }
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // RESULTADO --> { value: 'The Oracle', done: true }

