
const nomeDog = "Caramelo";
let idadeDog = 0.4
const idadeAdocao = 0.6

//extra
const porteDog = "pequeno"
const adocao = (idade, porteDog) => idade > idadeAdocao ? "Sim" : (porteDog === 'pequeno' ? "Sim" : "Não");

const estaParaAdocao = adocao(idadeDog, porteDog);

console.log(`Nome do dog: ${nomeDog}`);
console.log(`Idade do dog: ${idadeDog}`);
console.log(`Está para adoção: ${estaParaAdocao}`);