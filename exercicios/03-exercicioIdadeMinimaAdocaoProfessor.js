const nome = 'Ada'
const idade = 0
const porte = 'P'
const idadeMinima = 2

const adocao = idade >= idadeMinima ? 'Sim' : porte === 'P' ? 'Sim' : 'Não'

const adocaoV2 = idade >= idadeMinima || porte === 'P'

console.log("Nome dog: " + adocao)
console.log("Idade dog: " + idade)
console.log("Pode ser Adotado? " + adocao)
console.log("Pode ser Adotado v2: " + adocaoV2)

function verificarSePodeSerAdotado(idade, porte){
//const adocao = idade >= idadeMinima ? 'Sim' : porte === 'P' ? 'Sim' : 'Não'
const idadeMinima = 1
const adocaoV2 = idadeMinima == idade && porte === 'M'

console.log("Teste: "+ adocaoV2)

}
//Testar
//verificarSePodeSerAdotado(1,'M')
//verificarSePodeSerAdotado(2,'M')
//verificarSePodeSerAdotado(2,'P')
verificarSePodeSerAdotado(1,'M')

console.log("-------------------------------------------")

//console.log(adocaoV2)