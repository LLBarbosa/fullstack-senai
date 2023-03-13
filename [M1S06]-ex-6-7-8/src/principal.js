const express = require('express');
const router = require('./routes/router.js');
const app = express();
app.use(express.json());
app.use(router);

const port = 3333 

app.listen(port, () => {
    console.log(`Servidor hospedado na porta ${port}.`);
});

