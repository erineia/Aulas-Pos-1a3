/**
 Condição (se verdadeira)
    ação dentro do if
 senao se (outra condição)
    ação dentro do if
 senao
    ação dentro do else
 */

    if(10<5){
        console.log('Valor é maior')
    }else{
        console.log('Valor é menor')
    }

    const idade = 1
    const porte = 'P'

    if(idade >= 2){
        console.log('Pode ser adotado')
    }else if(porte === 'P'){
        console.log('Pode ser adotado')
    }else{
        console.log('Não pode ser adotado')
    }