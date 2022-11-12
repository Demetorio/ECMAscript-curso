//Arrays extraidos del archivo de promesas
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

function getData() {
    return new Promise((resolve,reject) => {
        if (data.length === 0) {
            reject(new Error());
        } 
        setTimeout(() => {
            resolve(data);
        },2000)
    })
}

getData()
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err.message)})
    .finally(() => console.log('Finallyyy'))
