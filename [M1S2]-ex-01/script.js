var aluno = [{

    nome: "Marcelo Vieira",
    altura: 1.75,
    idade: 25,
    sexo: "Masculino",
    sala: 101,
    matematica: 7.5

},

{
    nome: "Cristiano Amaral",
    altura: 1.82,
    idade: 50,
    sexo: "Masculino",
    sala: 202,
    matematica: 5.9

},

{
    nome: "Cristina Vicenzo",
    altura: 1.62,
    idade: 34,
    sexo: "Feminino",
    sala: 201,
    matematica: 9.8
},

{
    nome: "Pedro Siqueira",
    altura: 1.71,
    idade: 37,
    sexo: "Masculino",
    sala: 301,
    matematica: 6.3
},

{
    nome: "Sarita do Amaral",
    altura: 1.58,
    idade: 45,
    sexo: "Feminino",
    sala: 202,
    matematica: 8.5
}];

var media = 0
for (i = 0; i < aluno.length; i++) {
    media += aluno[i].matematica;

};

media = media / aluno.length;
console.log("A média dos alunos em Matemática é " + media);


for (i = 0; i < aluno.length; i++) {
    if (aluno[i].matematica < 7 ) {
        console.log(`${aluno[i].nome} foi reprovado(a)`)
    } else {
        console.log(`${aluno[i].nome} foi aprovado(a)`)
    }
}
