try{
    console.log(`Tentando alimentar o Pet...`)
    // new Error()

}catch(excecao){
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)
} finally{
    console.log(`SEMPRE SEREI EXCUTADO`)
}