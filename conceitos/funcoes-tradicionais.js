//função nomeada, com parametro, sem retorno

function exibirNomeDoDog(nome){
    console.log(nome)
}
function exibirPorteDoDog(porte = 'ND'){
    console.log(porte)
}

//função nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

function obterObjetoDog(){
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao:{
            nome: 'Neia'
        },
        adotado: true
    }
}

function listarObjetosDog(){
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    },
{
        nome: 'Toto silva',
        peso: 9.5
    }]
}

function listarNomesDeDogs(){
    return [
        'Pituca',
        'Marea',
        'Anderson'
    ]
}

exibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())