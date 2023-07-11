//# Exercício 11

//## Valor da parcela do Sucesso Compartilhado

//Na Cubos Academy alguns estudantes podem fazer o Curso de Desenvolvimento de Software e só começar a pagar após finalizado o curso quando (e se) tiverem obtido renda acima de R$ 2.000,00. Nesse caso o valor da parcela a ser paga é de 18% do valor da renda mensal da pessoal.

//Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa não deve nada, ou seja, o valor da parcela é zero.

//**a)** Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela, com o valor em reais.


// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.


/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/

//Para o exemplo acima, o programa deve imprimir a mensagem:


//O valor da parcela desse mês é R$ 540 reais


//Faça commit do programa.

/**b)** Altere o seu programa anterior para que, quando o valor da parcela a ser pago for 0, a mensagem explique porque o aluno não precisa pagar nada naquele mês.

```javascript
const rendaMensalEmCentavos = 150000;

Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.

const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/

const totalJaPagoPeloAluno = 1800000;
const mesesDecorridos = 12;
const rendaMensalEmCentavos = 350000;


if (mesesDecorridos > 60) {
    console.log('Voce nao deve nada pra Cubos')
} else if ('totalJaPagoPeloAluno >= 1800000') {
    console.log('Voce ja quitou todas parcelas');

} else if (rendaMensalEmCentavos < 200000) {
    console.log('O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.');
} else {
    const valorParcela = (rendaMensalEmCentavos / 100) * 18 / 100;
    console.log(`O valor da parcela desse mes é R$ ${valorParcela} reais`);
}


