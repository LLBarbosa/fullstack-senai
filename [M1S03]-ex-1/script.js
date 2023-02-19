fetch('users.json')
  .then(response => response.json())
  .then(usuarios => {
    // Aqui a lista de usuários está disponível
  })
  .catch(error => console.error(error));


const username = 'Ford50';

const user = usuarios.find(user => user.username === username);

if (user) {
  console.log(`Nome: ${user.name}`);
  console.log(`RG: ${user.rg}`);
} else {
  console.log('Usuário não encontrado');
}
