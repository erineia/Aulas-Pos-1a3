function geradorDeTagsDeIdentificacao (nome){
    return nome.toUpperCase()

}

function verificarSePodeSerAdotado (idade, porte){
    const idadeMinima = 1
    return idadeMinima == idade && porte === 'M'
}

function calcularConsumoDeRacao(nome, estoque, peso) {
  const gramasPorDia = peso * 30 * 10;
  return gramasPorDia
}

function decidirTipoDeAtividadePorPorte(porte){
     let atividade
switch(porte){
    case "pequeno":
       atividade = "brincar dentro de casa"
        break
    case "medio":
        atividade = "caminhada no quarteirão"
        break
    case "grande":
       atividade = "correr no parque"
        break
    default:
        atividade = "porte inválido"
 }
 return atividade
}

 async function buscarDadoAsync() {
  return 'Pipoca';
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}