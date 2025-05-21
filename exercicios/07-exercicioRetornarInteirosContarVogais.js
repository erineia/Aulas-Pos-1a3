const listaMista = [
  "Ontem tinha uma feira com mais de 50 animais para adoção, e me lembro de contar alguns",
  10,
  "cachorros",
  15,
  "Gatos",
  12,
  "chinchilas",
  14,
  "Calopsita"
];

function retornarInteiros(lista) {
  return lista.filter(item => typeof item === 'number');
}

function contarVogais(lista) {
  const vogais = 'aeiou';
  return lista
    .filter(item => typeof item === 'string')
    .join('') // Junta todas as strings
    .toLowerCase()
    .split('')
    .filter(letra => vogais.includes(letra))
    .length;
}

const listaSomenteInteiros = retornarInteiros(listaMista);
const quantidadeVogais = contarVogais(listaMista);

console.log(`Retornando a lista de inteiros: ${listaSomenteInteiros}`);
console.log(`Quantidade total de vogais nas strings: ${quantidadeVogais}`);