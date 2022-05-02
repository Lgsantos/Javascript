/*
https://www.freecodecamp.org/news/how-javascript-implements-oop/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/

class animals {
    constructor(name, specie) {
        this.name = name //serão as propriedades do objeto
        this.specie = specie
    }
    sing() {//será um método do objeto
        return `${this.name} can sing`
    }
    dance() {//outro método do objeto
        return `${this.name} can dance`
    }
}

let bingo = new animals('Faísca', 'Vira-lata')
console.log(bingo, '\n', 
            bingo.name, '\n',
            bingo.specie, '\n',
            bingo.sing(), '\n',
            bingo.dance(), '\n',
            typeof(bingo), '\n',
            bingo.hasOwnProperty('age')//Como JS é linguagem baseada em protótipos, qualquer objeto criado herda características do protótipo do qual deriva.
            , '\n')

//Subclassing
class cats extends animals {
    constructor(name, specie, age) {
        super(name, specie)
        this.age = age
    }
    age() {
        return `I am ${this.age} years old`
    }
}

let Frajola = new cats('Frajola', 'Siamês', 3)
console.log(Frajola)
