 const nome = "Caramelinho"
 const tempo = 45
 const porte = 'medio'

 let atividade

 switch(porte){
    case "pequeno":
       atividade = "Brincar dentro de casa"
        break
    case "medio":
        atividade = "Caminhada no quarteirão"
        break
    case "grande":
       atividade = "Correr no parque"
        break
    default:
        atividade = "Porte inválido"
    
 }

 let mensagem

     if(tempo < 15){
        mensagem = `Atividade rápida`}else if(tempo < 30){
        mensagem = `Tempo ideal`
    }else if(tempo > 30){
       mensagem = `Hora da diversão`
    }

    console.log(`${mensagem} : [${atividade}]`)