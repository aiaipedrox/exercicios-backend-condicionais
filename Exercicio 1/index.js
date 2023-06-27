//# Exercício 01

//## Pedra, papel ou tesoura

//Duas pessoas estão jogando pedra, papel ou tesoura.Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate. 
//Duas pessoas estão jogando pedra, papel ou tesoura.Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

//javascript
//const jogada1 = "pedra"
//const jogada2 = "tesoura"

//Neste caso seu código deveria imprimir`pedra`.

const jogada1 = "tesoura"
const jogada2 = "papel"

//seu código aqui 

if (jogada1 === jogada2) {
    console.log(Ëmpate);
} else {
    if (jogada1 === "pedra") {
        if (jogada2 === "tesoura") {
            console.log("Pedra Ganhou");
        } else {
            console.log("Papel Ganhou");
        }
    } else if (jogada1 === "tesoura") {
        if (jogada2 === "pedra") {
            console.log("Pedra Ganhou");
        } else {
            console.log("Tesoura Ganhou");
        }
    } else {
        if (jogada2 === "pedra") {
            console.log("Papel Ganhou");
        } else {
            console.log("Tesoura Ganhou");
        }
    }
}