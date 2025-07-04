const { roolDice } = require('../utils/dice');
const { getRendomBlock } = require('../utils/blocks');
const { LogRoolResult } = require('../utils/logger');

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);

    let block = await getRendomBlock();
    console.log(`Bloco sorteado: ${block} 🎲`);

    let diceResult1 = await roolDice();
    let diceResult2 = await roolDice();

    console.log(`Dados rolados: ${diceResult1} e ${diceResult2}`);

    let TotalTestSkill1 = 0;
    let TotalTestSkill2 = 0;

    if (block === "RETA") {
      TotalTestSkill1 = character1.VELOCIDADE + diceResult1;
      TotalTestSkill2 = character2.VELOCIDADE + diceResult2;

      await LogRoolResult(character1.NOME, block, diceResult1, character1.VELOCIDADE, "VELOCIDADE");
      await LogRoolResult(character2.NOME, block, diceResult2, character2.VELOCIDADE, "VELOCIDADE");

      if (TotalTestSkill1 > TotalTestSkill2) {
        console.log(`${character1.NOME} ganhou 1 ponto na RETA!`);
        character1.PONTOS++;
      } else if (TotalTestSkill2 > TotalTestSkill1) {
        console.log(`${character2.NOME} ganhou 1 ponto na RETA!`);
        character2.PONTOS++;
      } else {
        console.log("RETA: Empate! Nenhum ponto concedido.");
      }

    } else if (block === "CURVA") {
      TotalTestSkill1 = character1.MANOBRABILIDADE + diceResult1;
      TotalTestSkill2 = character2.MANOBRABILIDADE + diceResult2;

      await LogRoolResult(character1.NOME, block, diceResult1, character1.MANOBRABILIDADE, "MANOBRABILIDADE");
      await LogRoolResult(character2.NOME, block, diceResult2, character2.MANOBRABILIDADE, "MANOBRABILIDADE");

      if (TotalTestSkill1 > TotalTestSkill2) {
        console.log(`${character1.NOME} ganhou 1 ponto na CURVA!`);
        character1.PONTOS++;
      } else if (TotalTestSkill2 > TotalTestSkill1) {
        console.log(`${character2.NOME} ganhou 1 ponto na CURVA!`);
        character2.PONTOS++;
      } else {
        console.log("CURVA: Empate! Nenhum ponto concedido.");
      }

    } else if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} ⚔️ confrontou com ${character2.NOME}!`);

      await LogRoolResult(character1.NOME, block, diceResult1, character1.PODER, "PODER");
      await LogRoolResult(character2.NOME, block, diceResult2, character2.PODER, "PODER");

      if (powerResult1 > powerResult2) {
        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perde 1 ponto.`);
        character1.PONTOS++;
        character2.PONTOS--;
      } else if (powerResult2 > powerResult1) {
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perde 1 ponto.`);
        character2.PONTOS++;
        character1.PONTOS--;
      } else {
        console.log("Confronto: Empate! Ninguém perde pontos.");
      }
    }
    console.log(`Pontos atuais: ${character1.NOME}: ${character1.PONTOS} | ${character2.NOME}: ${character2.PONTOS}`);
  }

  console.log("\n---");
  console.log("🏁 Corrida encerrada!");
  console.log(" ");
  if (character1.PONTOS > character2.PONTOS) {
    console.log(`🎉 ${character1.NOME} venceu a corrida com ${character1.PONTOS} pontos!`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`🎉 ${character2.NOME} venceu a corrida com ${character2.PONTOS} pontos!`);
  } else {
    console.log("🤝 A corrida terminou em empate!");
  }
  console.log("---\n");
}

module.exports = {
  playRaceEngine
};