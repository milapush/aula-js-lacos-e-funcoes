// function somar(n1, n2){ 
//     let soma = n1 + n2;
// //     return soma;
// }

function fazerEscada(materiais, degraus){
    // let materiais = prompt("Com qual material você quer construir a sua escada?")
    // let degraus = prompt("Quantos degraus você quer que a sua escada tenha?")
    let escada = "";

    for(let i = 0; i < degraus; i++){
        escada += materiais;
        console.log(escada);
    }
}
const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min +1)) + min;
}
