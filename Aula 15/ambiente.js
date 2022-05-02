let num = [8, 4, 0, 9]

console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(num[0])

num[4] = 6 // Insere valor em uma posição (índice/chave) específica
console.log(num)

num.push(7) // Insere valor no final do vetor
console.log(num)

console.log(num.length)

num.sort()
console.log(num)

for (let pos = 0; pos < num.length; pos++) {//forma básica
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {//forma mais moderna e sucinta. Funciona para arrays e objetos
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(8)) //como procurar o índice de um valor em um vetor
console.log(num.indexOf(5)) //se resultado for -1, o valor não existe na array