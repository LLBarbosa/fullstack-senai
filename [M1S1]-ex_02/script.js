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

/* Forma básica de fazer a atividade */

media = (aluno[0].matematica + aluno[1].matematica + aluno[2].matematica + aluno[3].matematica + aluno[4].matematica) / 5;
console.log("A média dos alunos é " + media);


/* Forma recomendada utilizando laço "for" */

/* var media = 0;
for (var i = 0; i < aluno.length; i++) {
    media += aluno[i].matematica

}

media = media / aluno.length

console.log("A média dos alunos é " + media); */
