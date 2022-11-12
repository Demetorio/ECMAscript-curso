
//Array de objetos de una libreria musical
const data = [{
    title: "easy lover",
    year: "1983",
    author: 'phil collins'
},
{
    title: "easy",
    year: "1994",
    author: 'faith no more'
},
{
    title:"about a girl",
    year: "1992",
    author: 'nirvana'
}];

//sincronía de Javascript (ejecuto la función y me muestra los resultados de inmediato)
/*function getData () {
    console.log(data);
}
getData();

//SetTimeout es una función que simula asincronismo generando un delay expresado en milisegundos
function getData() {
    setTimeout(() => {
        return data;
    }, 3000);
}
getData();*/



//Promise
function getData() {
    return new Promise((resolve,reject) => {
        if(data.length === 0) {
            reject(new Error('Data is empty'))
        }
        setTimeout(() => {
            resolve(data);
        }, 3000);
    })
    }

    getData()
        .then((response) => console.log(response))
        .catch((err) => console.log(err.message))
