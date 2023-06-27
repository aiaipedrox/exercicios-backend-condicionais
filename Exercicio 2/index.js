//# Exercício 02
//## Par ou ímpar
//Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.

// % = resto da divisao

const jogada1 = 5;
const jogada2 = 3;

const resultado = jogada1 + jogada2;

if (resultado % 2 === 0) {
    console.log('par');
} else {
    console.log('impar');
}
