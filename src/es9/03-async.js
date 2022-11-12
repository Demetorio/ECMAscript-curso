async function* anotherGenerator() {
    yield new Promise((resolve) => {
        setTimeout(() =>  {resolve (console.log(1));},2000)})
    
    yield new Promise((resolve) => {
        setTimeout(() =>  {resolve (console.log(2));},2000)})
    
    yield new Promise((resolve) => {
        setTimeout(() =>  {resolve (console.log(3));},2000)})
    
}

const generatorObject = anotherGenerator();

generatorObject.next().then(response => console.log(response))
generatorObject.next().then(response => console.log(response))
generatorObject.next().then(response => console.log(response))
