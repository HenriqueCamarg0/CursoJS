// src/index.js

const playersData = require('./components/players');
const { choosePlayer, closeReadlineInstance } = require('./game/playerSelection');
const { playRaceEngine } = require('./game/engine');

const allPlayers = playersData.all;

(async function main() {
  console.log("Bem-vindo à Corrida de Kart!");

  // Seleção do Jogador 1
  const chosenPlayer1 = await choosePlayer(1, allPlayers);
  chosenPlayer1.PONTOS = 0;

  // Seleção do Jogador 2, garantindo que não seja o mesmo do Jogador 1
  let chosenPlayer2;
  while (true) {
    chosenPlayer2 = await choosePlayer(2, allPlayers);
    if (chosenPlayer2 !== chosenPlayer1) {
      chosenPlayer2.PONTOS = 0;
      break;
    } else {
      console.log("Por favor, escolha um personagem diferente para o segundo jogador.");
    }
  }

  console.log(
    `\n🏁 Corrida entre ${chosenPlayer1.NOME} e ${chosenPlayer2.NOME} Começando...\n`
  );

  await playRaceEngine(chosenPlayer1, chosenPlayer2);

  closeReadlineInstance();
})();