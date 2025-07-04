const mario = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const luigi = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const yoshi = {
  NOME: "Yoshi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const peach = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const bowser = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const donkeyKong = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 3,
  PODER: 5,
  PONTOS: 0,
};

module.exports = {
  mario,
  luigi,
  yoshi,
  peach,
  bowser,
  donkeyKong,
  all: [mario, luigi, yoshi, peach, bowser, donkeyKong]
};