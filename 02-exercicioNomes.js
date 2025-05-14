let nome = "   ..Caramelinho   ....";

let nomeFormatado = nome.replace(/\./g, '').replace(/\s+/g, ' ').trim();

let valido = nomeFormatado.split(' ').length === 1;


console.log("Nome original:", nome);
console.log("Nome formatado:", nomeFormatado);
console.log("É válido (apenas uma palavra)?", valido ? "Sim" : "Não");


