//# Exercício 04
//## Dando nome as pedras
//Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o "nome" da bucha. Para quem não constuma jogar dominó, segue um glossário:
//| Bucha de | Nome   |
//| -------- | ------ |
//| 0        | Branco |
//| 1        | Ás     |
//| 2        | Duque  |
//| 3        | Terno  |
//| 4        | Quadra |
//| 5        | Quina  |
//| 6        | Sena   |

//Para o caso do exercício anterior, deverá ser impresso na tela:

//  Bucha de terno


const ladoA = 3;
const ladoB = 3;
//seu código aqui


if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("bucha de branco");
    } else if (ladoA === 1) {
        console.log("bucha de Ás")
    } else if (ladoA === 2) {
        console.log("bucha de duque");
    } else if (ladoA === 3) {
        console.log("bucha de terno");
    } else if (ladoA === 4) {
        console.log("bucha de quadra");
    } else if (ladoA === 5) {
        console.log("bucha de quina");
    } else {
        console.log("bucha de sena");
    }
} else {
    console.log("Nao")
}








