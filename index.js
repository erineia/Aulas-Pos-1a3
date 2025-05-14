/**
 * Console API
 */

console.log("Aula inicial js")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Neia',
    turma: '2',
    Disciplina: 'Prog JS'
},
{
    nome: "Nat",
    turma: '2',
    Disciplina: 'Prog JS'
}])

/**
 * Constantes e Variáveis
 */
//const - para informações que nunca mudam
// var ou let - para informações que podem mudar

//informações de um dog que não mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informações que mudam

let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

// hoisting -> pensamento ou elevação

const irmaos = [{
    nome: "Thor",
    idade: 2
},
{
    nome:"Hela",
    idade:3
}]
console.table(irmaos)

/**
 * Tipos de dados - cadeia, inteiro, real, logicos, vetor, matriz
 * (funções - leia e escreva)
 * 
 cadeia, String
 inteiro/real - Number,
 logico - Boolean
 vetor/matriz - Array

 undefined
 null

 BigInt = Number  para números extremamente grandes
 Symbol = 'indentificador único'
 */

 console.log("5" +1)
 const valor = "50"
 console.log(valor)

 /**
  * Strings
  * jeitos de declaração
  */
 //'Turma 02 do PGATS'
 //"Turma 02 do PGATS"
 //`Turma 02 do PGATS`

 const numeroAula = "03"
 const turma = "2"
 let data = "05 de Abril"
 console.log("Aula 03 da Turma " + turma + " no Sábado do dia 5 de Abril")
 console.log(`Aula ${numeroAula} da Turma ${ turma } no Sábado do dia ${data}`)

 //Split - separar a string

 const nomesDeAlunos = "Guiliana André Goku Lucas Lenilson"
 const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

 console.log(nomesDeAlunosSplit)

 console.log(nomesDeAlunos.toLowerCase()) // minusculo
 console.log(nomesDeAlunos.toUpperCase()) // maiúsculo

 //console.log(nomesDeAlunos.includes("Dennys"))
 console.log(nomesDeAlunos.includes("G"))

 //Chai - biblioteca de asserções

 console.log(nomesDeAlunos.replaceAll('a', 'i'))

 const conceitosLogicos = "         inteiro real cadeia de caracteres...      "
 console.log(conceitosLogicos.trim())

 let dataParaCortar = "05 de Abril"
 const cpf = "78438332420"

 console.log(dataParaCortar.slice(0 , 2))
 console.log(cpf.slice(0,3))