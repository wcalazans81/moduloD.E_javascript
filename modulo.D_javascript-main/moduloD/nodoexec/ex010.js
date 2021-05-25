let valores = [0, 8, 1, 7, 4, 3, 1, 9, 2]
for(let pos=1; pos< valores.length; pos++) {
console.log(`A posição ${pos}ª tem o valor ${valores[pos]}`)
}
console.log('Fim...')

let num = [0, 8, 1, 7, 4, 3, 1, 9, 2]
valores.sort()
for(let pos in num) {
    console.log(`A posição ${pos}ª tem o valor ${valores[pos]}`)
}

let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor na posição ${pos}`)
    console.log(`O valor é ${num[pos]}`)
}