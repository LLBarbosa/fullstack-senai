const vowals = ['a', 'e', 'i', 'o', 'u'];
const str = 'aehjhujjij';
const str1 = 'jhdssrt';
const number1 = 126;

function vowelCounter(str) {
    if (!str instanceof String || typeof str !== 'string') {
        return 'Entrada inválida!!'
    }

    let vowelCount = str.toLowerCase().split('').filter(isVowel).length;
    return vowelCount != 0 ? vowelCount + " vogal(is) encontrada(s)!" : "Nenhuma vogal encontrada!!";


}

function isVowel(letter) {
    return vowals.includes(letter);

}
// TESTS:
//-----------------------------
console.log(vowelCounter(str));
console.log(vowelCounter(str1));
console.log(vowelCounter(number1));