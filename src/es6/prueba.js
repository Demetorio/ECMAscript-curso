function cat (object1,object2) {
    const gato = {...object1, ...object2}
    console.log(gato);
}

const object1 = {
    name: 'cuchito',
    age:3
}

const object2 = {
    color: 'blanco con negrito',
    regalon: 'si'
}

cat(object1,object2);