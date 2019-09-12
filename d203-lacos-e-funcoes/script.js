let filmes = ["Star Wars", "Shazam", "Sherk", "Bacurau", "Star Treck"];

let i =0;

while(i<filmes.length){
    console.log(filmes [i]);
    i++;
}

// for(InputDeviceInfo;filmes;passo){
//     codigo a ser executado caso seja verdade
// }

for(let j = 0; j < filmes.length; j++){
    console.log(filmes[j]);
}

//for in 
console.log("FOR IN");

for(let indice in filmes){
    console.log(filmes[indice]);
}

console.log("FOR OF");
for(let filme of filmes){
    console.log(filme);
}

