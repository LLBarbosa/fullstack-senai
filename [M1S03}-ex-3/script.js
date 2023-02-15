console.log('Hello');

let dailyTasks = ["Banho", "Dar comida para o cachorro", "Trabalho", "Atvidade Física", "Sair com os amigos", "Fazer compras"];
let task;


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

function changeTask(oldTask, newTask) {
  let index = dailyTasks.indexOf(oldTask);
  if (index != -1) {
    dailyTasks[index] = newTask
  }

}

function deleteTask(task) {
  return dailyTasks.filter(function (element) {
    return element !== task;

  })

}

function addTasks(task) {
  dailyTasks.push(task);
  console.log(dailyTasks);

}

 //console.log(lookForTasks("Trabalho"));

//changeTask("Banho", "Carro");
//console.log(dailyTasks);

//let newDailyTasks = console.log(deleteTask("Trabalho"));

//console.log(addTasks("Comer"));




