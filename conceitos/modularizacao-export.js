/**
Sintaxe CommonJS:
    module.exports = {} / require('')

ESM - Ecmascript Standard Modules
        export {} / import
 */

const brinquedos = [
    'Osso',
    'Peteca',
    'Chocalho'
]

const nomePet = `Pitoco`

function exibirNomePet(paramNomePet){
    console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet){
    console.log(`Idade do Pet é ${paramIdadePet}`)
}

export{
    exibirNomePet,
    exibirIdade,
    brinquedos
}