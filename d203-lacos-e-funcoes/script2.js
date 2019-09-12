let filmes = [
    {titulo: "Invocação do Mal", classificacao: 16},
    {titulo: "Sharkboy e Lavagirl", classificacao: 0},
    {titulo: "Senhor dos aneis", classificacao: 12},
    {titulo: "Ninja Assassino", classificacao: 18},
    {titulo: "Velozes e Furiosos", classificacao: 14}
]

let idade = Number(prompt("Qual a sua idade?"));

while(idade < 0 || isNaN(idade)){
    alert("Idade inválida. Por favor digite novamente")
    idade = Number(prompt("Qual a sua idade?"));
}

for(let filme of filmes){ //Se fizer isso está passando por todos os filmes
    if(idade >= filme.classificacao){
        console.log(filme.titulo);
    }
}

console.log()