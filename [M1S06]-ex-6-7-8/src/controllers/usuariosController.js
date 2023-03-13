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
    deleteUser
}


