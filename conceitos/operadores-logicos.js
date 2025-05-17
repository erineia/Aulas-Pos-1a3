/**
 && - E / AND
 || - OU / OR
 !  - NÂO / NOT
 */

// && - E / AND
const nomeDog = "Pipoca"
const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)

//|| - OU / OR
const dog = {
    adotado: false,
    peso: 5.3
}
console.log(!dog.adotado || dog.peso < 10)

//NÂO / NOT
console.log(true)
console.log(!true)