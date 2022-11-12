
//declaración de una clase
class user {
    //constructor
    constructor(name) {
        //this
        this.name = name;
    }

     // metodos
     speak() {
        return 'Hello';
    }

    greeting() {
        //usando template literals
        return `${this.speak()} ${this.name}`
    }
};

//creación de instancia de una clase
const demetori = new user('demetori');
console.log(demetori.greeting());

const ricky1 = new user('ricky1');
console.log(ricky1.greeting());


class player {
    constructor(name) {
        this.name = name;
    }

    isOnline() {
        return 'is now online';
    }

    notice() {
        return `The player ${this.name} ${this.isOnline()}`
    }
}

const inume = new player('inume');
console.log(inume.notice());

const neph = new player('neph');
console.log(neph.notice());



//getter y setters

class user {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}
const kakofoni = new user('David', 15);
console.log(kakofoni.uAge);
console.log(kakofoni.uAage = 80);

//Los getter y setters son utiles para que el usuario pueda acceder a un atributo de un objeto y modificarlo