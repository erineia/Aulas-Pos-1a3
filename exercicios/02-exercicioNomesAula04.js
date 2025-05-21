const nomeDog = '  Ba!ley Maria  '

let nomeFormatado = nomeDog.trim()
nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
nomeFormatado = tornarPrimeiraLetraMaiuscula(nomeFormatado)

//const palavras = nomeFormatado.split(/\s+/);
//console.log(palavras)
//const valido = palavras.lenght ===1;

const valido = verificarSeONomeEValido(nomeFormatado)

console.log(nomeDog)
console.log(nomeFormatado)
console.log(valido)

function removerCaracteresEspeciais(nome){
    return nome.replace(/[^a-zA-Z\s]/g, "");
}

function removerEspacosEntrePalavras(nome){
    return nome.replace(/\s+/g, "")
}
function tornarPrimeiraLetraMaiuscula(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1, nome.lenght)}

function verificarSeONomeEValido(nome){
    return nome.split(" ").lenght === 1
}