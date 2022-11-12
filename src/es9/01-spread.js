const user = { username: "gndx", age: 34, coutry: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);


const cat = {name: 'laurita', age: 8, country: 'chile', weight: 'fat', color: 'grey'};

const {name, ...others} = cat;
console.log(name);
console.log(others);
