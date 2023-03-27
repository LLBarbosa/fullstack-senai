// Inserindo dados na tabela
(async () => {

   const database = require('./db');
   const Atleta = require('./atleta');
   await database.sync()

 /*  const novoAtleta1 = await Atleta.create({
      nome: 'Pedro Guilherme',
      sobrenome: 'Santos',
      idade: 25,
      posicao:'goleiro',
      equipe: 'Flamengo',
      estado_equipe: 'RJ'
   })

   const novoAtleta2 = await Atleta.create({
      nome: 'Fagner Conserva',
      sobrenome: 'Lemos',
      idade: 33,
      posicao:'lateral-direito',
      equipe: 'São Paulo',
      estado_equipe: 'SP'
   })

   const novoAtleta3 = await Atleta.create({
      nome: 'Jhon Adolfo Arias',
      sobrenome: 'Andrade',
      idade: 25 ,
      posicao: 'meia',
      equipe: 'Fluminense',
      estado_equipe: 'RJ'

   })

   const novoAtleta4 = await Atleta.create({
      nome: 'Éverson Felipe Marques',
      sobrenome: 'Pires',
      idade: 32 ,
      posicao:'goleiro',
      equipe: 'Atlético Mineiro',     
      estado_equipe: 'MG'

   }) */
   
// Fazendo atualizações na tabela "atleta"
//-------------------------------------------------
   const atletas1 = await Atleta.findByPk(1);
   console.log(atletas1);

   atletas1.posicao = 'atacante';
   await atletas1.save();

   const atletas2 = await Atleta.findByPk(2);
   console.log(atletas2);

   atletas2.equipe = 'Corinthians';
   await atletas2.save();


})();


/* [M1S08] Ex 5 - OMR Sequelize:
   Crie uma tabela em um banco de dados com o OMR Sequelize e atualize dados nessa tabela. */
