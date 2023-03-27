// Inserindo dados na tabele
(async () => {

    const database = require('./db');
    const Piloto = require('./piloto');
    await database.sync()

    const novoPìloto1 = await Piloto.create({
        nome: 'Max',
        sobrenome: 'Verstappen',
        idade: 25,
        equipe: 'Red Bull Racing',
        nacionalidade: 'Holanda'
    })

    const novoPìloto2 = await Piloto.create({
        nome: 'Fernando',
        sobrenome: 'Alonso',
        idade: 41,
        equipe: 'Aston Martin Racing',
        nacionalidade: 'Espanha'
    })

    const novoPìloto3 = await Piloto.create({
        nome: 'Lando',
        sobrenome: 'Norris',
        idade: 23,
        equipe: 'McLaren',
        nacionalidade: 'Reino Unido'

    })

})();

/*[M1S08] Ex 4 - OMR Sequelize
Crie uma tabela em um banco de dados com o OMR Sequelize e insira dados nessa tabela. */

