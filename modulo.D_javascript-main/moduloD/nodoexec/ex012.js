function parimpar(n) {
    if (n%2==0) {
        return `O número ${n} é PAR`
    } else {
        return`O número ${n} é IMPAR`
    }
}
console.log(parimpar(223))
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(5, 6))