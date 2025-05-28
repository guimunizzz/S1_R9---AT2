let numerosInteiros = [];
let numeroDigitado;

for (let index = 0; index < 10; index++) {
    numeroDigitado = parseInt(prompt(`Digite o ${index + 1}° numero inteiro`))
    if (isNaN(numeroDigitado)) {
        alert("Voce digitou um numero invalido, tente novamente!");
        index--;
    } else {
        numerosInteiros[index] = numeroDigitado;
    }
}

for (let index = 0; index < numerosInteiros.length; index++) {
    if (numerosInteiros[index] % 2 == 0) {
        console.log(`Na posição ${index} o numero ${numerosInteiros[index]} é par`);
    }
}