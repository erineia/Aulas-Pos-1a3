const nome = 'Ada'
const peso = 5.5

const porte = peso <= 10 ? 'pequeno' : 'médio'

console.log('--------')
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log('--------')

//Alternativa com a função

function classificarPortePorPeso(nome, peso){
    const porte = peso <= 10 ? 'pequeno' : 'médio'
        console.log('--------')
        console.log(`Nome: ${nome}`)
        console.log(`Peso: ${peso}`)
        console.log(`Porte: ${porte}`)
        console.log('--------')
} 

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bandite', 35)
classificarPortePorPeso('Rex', 8)