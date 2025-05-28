let nomes = [];
let nomeDigitado;
for (let index = 0; index < 7; index++) {
    nomeDigitado = prompt(`Digite o ${index + 1}° nome`);
    if (isNaN(nomeDigitado)) {
        nomes[index] = nomeDigitado;
    } else {
        alert("Voce digitou um nome invalido, tente novamente!");
        index--;
    }
}

for (let index = nomes.length; index > 0; index--) {
    console.log(nomes[index]);
}