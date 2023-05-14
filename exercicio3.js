
function multiplos(){
    let i;
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if ((i%5==0) || (i%7==0)) {
            sum = sum + i;
        }
    }
    return sum;
}

//Exemplo dado:
// function multiplosEX(){
//     let i;
//     let sum = 0;
//     for (let i = 1; i < 10; i++) {
//         if ((i%3==0) || (i%5==0)) {
//             console.log(i);
//             sum = sum + i;
//         }
//     }
//     return sum;
// }



console.log(multiplos());
// console.log(multiplosEX());