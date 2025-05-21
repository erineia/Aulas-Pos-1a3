const nome = "Toto", raca = "Vira-Lata"
let idade = 1, peso = 1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirsLetter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

let racaFirstLetter = raca.replaceAll('v', 'V')

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsLetter
}]

console.log(animal)

