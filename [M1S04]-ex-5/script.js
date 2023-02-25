class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura.`);

    }
}

class Worker extends Person {

    constructor(name, age, height, occupation) {
        super(name, age, height);
        this.occupation = occupation;
    }


    profissao() {
        return this.occupation;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura e sou ${this.occupation}.`);
    }
}

const person = new Worker('Laércio', 50, 1.78, 'Software Developer');
person.apresentar();