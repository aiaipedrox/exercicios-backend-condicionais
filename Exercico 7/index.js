//# Isenção de impostos

//Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda. Simplificamos aqui quem são essas pessoas:
//Segundo a receita federal, algumas pessoas são isentas do pagamento de imposto de renda (IR). Simplificamos aqui quem são essas pessoas:

//Pessoas portadores de alguma doença grave
//Pessoas que já estão aposentadas
//Caso a pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Caso esses total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.
//- Pessoas portadores de alguma doença grave
//- Pessoas que já estão aposentadas
//- Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Na condição em que o total de rendimentos seja **superior** a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

//Faça um programa que determine se a pessoa deve pagar IR ou não.

//* Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA** 
//* Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE** 
//* Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**
//- Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA**
//- Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE**
//- Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**



const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2544970; //emCentavos

if (aposentada || portadoraDeDoenca) {
    console.log("isenta");
} else if (totalDeRendimentos < 2855970) {
    console.log("vaza leao! já está dificil sem voce");
} else {
    console.log("pega leao");
}