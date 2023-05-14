var array = [2,5,10,20,30,30000,200,5000000,800,900,1000]

function maiorElemento (array){
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        // console.log(element);
        if( array[i] > maior ){
            maior = array[i];
            indiceMaior = i;
        }
    }
    // return maior;
    return indiceMaior;
}

function menorElemento (array){
    let menor = 500;
    for (let i = 0; i < array.length; i++) {
        // console.log(element);
        if( array[i] < menor ){
            menor = array[i];
            indiceMenor = i;
        }
    }
    // return maior;
    return indiceMenor;
}

console.log(maiorElemento(array));
console.log(menorElemento(array));