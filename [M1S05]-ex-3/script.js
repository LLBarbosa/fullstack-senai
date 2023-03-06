const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

function addUsers(users) {
    if (users.length === 0) {
        console.log('Por favor, insira pelo menos um usuário!');
        return;
    }
    for (let user of users) {
        if (list.includes(user)) {
            console.log('Usuário(s) já cadastrado(s)!');
            return;
        }
        if (!user instanceof String || typeof user !== 'string') {
            console.log('Usuário inválido!');
            return;
        }
    }
    list.push(...users);
    console.log(list);
}
//TESTS:
//------------------------------------------
addUsers(['Marcos', 'Alex', 'Aderbal']); // os usuários não são adicionados porque temos pelo menos um elemento em duplicidade
addUsers(['Juliana', 'Roberta']);// os usuários são adicionados à lista normalmente
addUsers([1234, 'Marcos']);// retorna um erro, pois o primeiro usuário a ser adicionado não é uma string
addUsers([]);// retorna um erro. O programa solicita que pelo menos um usuário seja enviado à lista