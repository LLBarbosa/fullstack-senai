let dailyTasks = ["Banho", "Dar comida para o cachorro", "Trabalho", "Atividade Física", "Sair com os amigos", "Fazer compras"];
let task;

//1.Busca a tarefa na lista
//------------------------
function lookForTasks(task) {
  task = dailyTasks.find(function (element) {
    return element === task;
  });

  if (task) {
    return "A tarefa " + task + " foi encontrada na lista.";
  } else {
    return "A tarefa não foi encontrada na lista.";
  }
}
//2.Altera uma tarefa trocando por outra 
//-------------------------------------
function changeTask(oldTask, newTask) {
  let index = dailyTasks.indexOf(oldTask);
  if (index != -1) {
    dailyTasks[index] = newTask
  }
}
//3.Deleta uma tarefa específica
//-----------------------------
function deleteTask(task) {
  return dailyTasks.filter(function (element) {
    return element !== task;

  })
}
//4.Adiciona uma tarefa
//--------------------
function addTasks(task) {
  dailyTasks.push(task);
  console.log(dailyTasks);

}

//TESTES DE IMPLEMENTAÇÃO:
//------------------------

//console.log(lookForTasks("Trabalho"));

//changeTask("Banho", "Comer");
//console.log(dailyTasks);

//let newDailyTasks = console.log(deleteTask("Trabalho"));

//console.log(addTasks("Comer"));
