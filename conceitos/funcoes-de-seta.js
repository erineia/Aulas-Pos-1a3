//funções de seta / flecha


const exibirNomeDoDog = (nome) =>{
    console.log(nome)
}

const exibirPorteDoDog = (porte = 'ND') =>{
    console.log(porte)
}

const obterNomeDoDogFormatado = (nome) =>{
    return nome.toUpperCase()
}

const obterObjetoDog = () =>{
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao:{
            nome: 'Neia'
        },
        adotado: true
    }
}

const listarObjetosDog = () =>{
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    },
{
        nome: 'Toto silva',
        peso: 9.5
    }]
}


const listarNomesDeDogs = () => {
    return [
        'Pituca',
        'Marea',
        'Anderson'
    ]
}

//arrow function sem bloco + com return 'automático'
const dobrar = (numero) => numero * 2

exibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())