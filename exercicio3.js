let numerosSorteados = [];
let numeroAleatorio;
let numeroUsuario;
let contador = 0;

for (let index = 0; index < 30; index++) {
    numeroAleatorio = Math.ceil(Math.random() * 15);
    numerosSorteados[index] = numeroAleatorio;
}

numeroUsuario = parseInt(prompt("Digite um numero para verificar se foi sorteado"));

for (let index = 0; index < numerosSorteados.length; index++) {
    if (numerosSorteados[index] == numeroUsuario) {
        alert(`Parabéns, você acertou o numero sorteado que estava na posição ${index}`);
        contador ++;
    }
}

console.log(`O numero foi sorteado ${contador} vezes`);