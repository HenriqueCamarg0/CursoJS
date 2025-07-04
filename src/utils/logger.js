async function LogRoolResult(characterName, block, diceResult, attributeValue, attributeName) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} e obteve ${diceResult} + ${attributeValue} (${attributeName}) = ${diceResult + attributeValue}`);
}

module.exports = {
  LogRoolResult
};