const usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
const finalList = [];

for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    let fruta = frutas[frutas.length - (1 + i)];
    finalList.push(usuario + " - " + fruta);
}
console.log(finalList);