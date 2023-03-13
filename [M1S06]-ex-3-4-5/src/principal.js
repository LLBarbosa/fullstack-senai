const express = require('express');
const app = express();
app.use(express.json());


/* [M1S06] Ex 4 - Rotas com express
------------------------------------
Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um console.log() a mensagem “Rota de API criada pelo(a): {nome}”;
OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.
OBS: utilize a plataforma de API que você preferir. */
app.get('/envia/:name', (req, resp) => {
    let name = req.params.name;
    resp.send(`Rota de API criada por: ${name}`);
    console.log(`Rota de API criada por: ${name}`);
});

/*[M1S06] Ex 5 - Rotas com express
-----------------------------------
Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo da requisição e como resposta retorne esse objeto no formato json padrão.
OBS: utilize a plataforma de API que você preferir.*/
app.post('/enviaObjeto', (req, resp) => {
    const object = req.body;
    resp.json(object);
    console.log(`Enviado com sucesso ${JSON.stringify(object)}`);
});


/* [M1S06] Ex 3 - Iniciando um servidor node
---------------------------------------------
Inicie um servidor node local em sua máquina utilizando express.
O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha. */
app.listen(3333, () => {
    console.log("Servidor hospedado na porta 3333.");
});

app.get('/', (req, res) => {
    res.send("Servidor nas alturas!!")
});

