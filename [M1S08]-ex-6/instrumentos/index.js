(async () => {

    const database = require('./db');
    const Guitarra = require('./guitarra');
    await database.sync()

    // Inserindo dados na tabela 'guitarra
    //------------------------------------------

    /* const novaGuitarra1 = await Guitarra.create({
        modelo: 'Stratocaster',
        marca: 'Fender',
        ano: 1959,
        cor: 'Creme',
        país: 'Estados Unidos'
    })

    const novaGuitarra2 = await Guitarra.create({
        modelo: 'Les Paul',
        marca: 'Gibson',
        ano: 1972,
        cor: 'Preta',
        país: 'Estados Unidos'
    })

    const novaGuitarra3 = await Guitarra.create({
        modelo: 'RG-421',
        marca: 'Ibanez',
        ano: 1986,
        cor: 'Vermelha',
        país: 'Japão'

    }) */

    const guitarras = await Guitarra.findByPk(2);
    console.log(guitarras);

    await guitarras.destroy() // deletando os registros da tabela relacionados ao 'id = 2'



})();

/* [M1S08] Ex 6 - OMR Sequelize:
   Crie uma tabela em um banco de dados com o OMR Sequelize e delete dado nessa tabela. */