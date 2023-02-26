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
// Testes:
const person1 = new Person('Laércio Luiz Barbosa', 50, 1.78);
person1.apresentar();
const person2 = new Worker('Marcelo Costa', 28, 1.81, 'analista de software');
person2.apresentar();