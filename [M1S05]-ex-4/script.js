const users = [
    { nome: "luis", idade: 26 },

    { nome: "norma", idade: 16 },

    { nome: "daiana", idade: 26 },

    { nome: "jorge", idade: 16 },

    { nome: "kauan", idade: 16 },

    { nome: "charles", idade: 26 },

    { nome: "marco", idade: 16 },

    { nome: "bruno", idade: 16 }
]


console.log('Menores de dezoito anos:');
let underEighteen = [];
let overEighteen = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].idade < 18) {
        underEighteen.push(users[i]);
    } else {
        overEighteen.push(users[i]);
    }
}
console.log('\nMaiores de dezoito anos:');
console.log(overEighteen);
console.log('Menores de dezoito anos:');
console.log(underEighteen);
















