function fatorial(n) {
    let fat = 1
    for (c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// RECURSIVIDADE
function fator(n) {
    if (n == 1) {
        return 1
    }else {
        return n * fator(n-1)
    }
}

console.log(fator(5))