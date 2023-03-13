const usuarios = [];

const getAll = (req, resp) => {
    resp.json(usuarios);
};

const getOne = (req, resp) => {
    const id = parseInt(req.params.id) || null;
    const usuario = getUser(id, resp);
    if (usuario == null) return;
    resp.json(usuario);
};

const addUser = (req, resp) => { // exercício 7 - adicionando um usuário
    const usuario = req.body;
    const validReq = 'nome' in usuario && 'idade' in usuario && 'cargo' in usuario && 'senha' in usuario;
    if (!validReq) {
        resp.status(406).json({ 'mensagem': 'Está faltando dados para concluir a operação' });
        return;
    }
    if (usuario.idade < 21) {
        resp.status(422).json({ "mensagem": "Usuário não possui idade suficiente" });
        return;
    }
    usuario.id = getId();
    usuarios.push(usuario);
    resp.status(201).json({ "mensagem": "Criado com sucesso" });
};

const validateRole = (req, resp, next) => { // exercício 8 - implementando o middleware
    const role = req.body.cargo;
    const isLeader = role !== undefined && ["LIDER", "LÍDER"].includes(role.toUpperCase());
    if (!isLeader) {
        resp.status(400).json({ "mensagem": "Somente líderes podem criar usuários" })
    } else {
        req.body.cargo = "lider";
        next();
    }
}

const deleteUser = (req, resp) => { // exercício 7 - deletando um usuário
    const id = parseInt(req.params.id) || null;
    const usuario = getUser(id, resp);
    if (usuario == null) return;
    usuarios.splice(usuarios.indexOf(usuario), 1);
    resp.status(200).json({ "mensagem": "Deletado com sucesso" });
};

const getId = () => {
    return Math.max(usuarios.map(usuario => usuario.id)) + 1;
}

const getUser = (id, resp) => { // exercício 7 - validando o corpo da requisição
    if (id === null) {
        resp.status(406).json({ "mensagem": "Está faltando dados para concluir a operação" });
        return null;
    }
    const usuario = usuarios.find(usuario => usuario.id === id);
    if (usuario === undefined) {
        resp.status(404).json({ "mensagem": "Usuário não encontrado" });
        return null;
    }
    return usuario;
}

module.exports = {
    getAll,
    getOne,
    addUser,
    deleteUser,
    validateRole
}

/* [M1S06] Ex 6 - Criando uma API (parte 1):
   Você foi convocado para criar uma API completa, levando todo o conhecimento aprendido, incluindo a arquitetura vista no slide Aula 01 página 09, crie duas rotas HTTP: uma para o envio de um novo usuário para o banco de dados, e outra para deletar o usuário.
   Apenas crie a conexão do servidor node e as rotas em arquivos separados.
   Não será necessária a implementação das funcionalidades.


   [M1S06] Ex 7 - Criando uma API (parte 2):
   Agora continuando o exercício anterior no módulo de controlador siga as seguintes regras de negócio de cada rota:
   Envio de um novo usuário:
   O objeto a ser enviado no corpo da requisição para controlador deve seguir o seguinte formato :
  {
    "nome":"Fulano",
    "idade":18,
    "cargo":"junior"
    "senha":"12345678"
  }
  O método HTTP será o post com a rota da sua escolha;
  Caso o usuário tenha idade menor que 21 anos não deverá prosseguir com a requisição, então retorne o objeto {“mensagem”: “Usuário não possui idade suficiente”};
  Caso na requisição não seja enviado nada no seu corpo retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
  Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Criado com sucesso”};
  Deletar o usuário:

  Deverá ser passado na URL da requisição um id;
  Verifique na url se o id é passado, caso contrário retorne com status 406 com o objeto {“mensagem”: “Está faltando dados para concluir a operação”};
  Caso a operação seja um sucesso, retorne com status 200 o objeto {“mensagem”: “Deletado com sucesso”};
  OBS: lembre de alterar os dados para que passe em todos os testes e sua API esteja 100%.


  [M1S06] Ex 8 - Criando uma API (parte 3):
  Agora para deixar nossa aplicação do exercício anterior mais completa, na rota de Envio de um novo usuário adicione um middleware que irá capturar o cargo do usuário.
  Só poderá prosseguir para a seguinte função se o cargo do usuário for igual a string “líder”.
  Lembre-se: um middleware é uma função que fica antes da chamada para o controlador ou antes da função da rota.
*/