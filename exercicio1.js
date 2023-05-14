//Calculo recursivo do MDS entre dois numeros:

function calculateMDC(a, b) {
    if (b == 0) {
        return a;
    }
    return calculateMDC(b, a % b);
}
var n1 = 40;
var n2 = 90;
console.log(calculateMDC(n1, n2));

