// src/game/playerSelection.js
const readline = require('readline');

let rlInstance = null; // Garante apenas uma instância do readline

function getReadlineInstance() {
  if (!rlInstance) {
    rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  return rlInstance;
}

function closeReadlineInstance() {
    if (rlInstance) {
        rlInstance.close();
        rlInstance = null;
    }
}


async function choosePlayer(playerNumber, allPlayers) {
  const rl = getReadlineInstance();

  return new Promise((resolve) => {
    console.log(`\nSelecione o ${playerNumber}º Jogador:`);
    allPlayers.forEach((player, index) => {
      console.log(`${index + 1}. ${player.NOME} (Vel: ${player.VELOCIDADE}, Man: ${player.MANOBRABILIDADE}, Pod: ${player.PODER})`);
    });

    rl.question('Digite o número do personagem: ', async (answer) => {
      const chosenIndex = parseInt(answer) - 1;
      if (chosenIndex >= 0 && chosenIndex < allPlayers.length) {
        resolve(allPlayers[chosenIndex]);
      } else {
        console.log("Escolha inválida. Por favor, tente novamente.");
        resolve(await choosePlayer(playerNumber, allPlayers));
      }
    });
  });
}

module.exports = {
  choosePlayer,
  closeReadlineInstance
};