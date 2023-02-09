const number = parseInt(prompt("Digite um número inteiro entre 1 - 10: "));

if (number > 0 && number <= 10) {

console.log("Tabuada de " + number +":");
for (i = 1; i <= 10; i++) {
       let calcule = number * i;
       console.log(number + " x " + i + " = " + calcule)
};


} else {
       console.log("Número não permitido!!");
}










