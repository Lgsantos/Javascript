/* 
https://www.freecodecamp.org/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/

Programação Funcional é um dos paradigmas de programação

JavaScript é multi paradigma

Principais conceitos:
- usar apenas Funções Puras (retorna sempre retorna o mesmo resultado para uma determinada entrada & não pode causar nenhum efeito colateral - qualquer mudança que ocorrer fora do escopo interno da função)
- Imutabilidade dos dados (O dado pode ser manipulado em uma função ou até mesmo atribuído a outra variável,mas não pode ser mudado depois de criado)
*/

let PI = 3.14
const calculaArea = (r) => r * r * PI //Função impura: se PI mudar,mesmo passando duas vezes o mesmo valor do raio teremos resultados diferentes
console.log(calculaArea(10))

const calculaArea1 = (r, pi) => r * r * pi//função pura
console.log(calculaArea1(10, PI))

let counter = 1
function increaseCounter(value) {
    return counter = value + 1
}//função é impura pois altera o valor da variável counter.
console.log(increaseCounter(counter), counter)

let counter1 = 1
function increaseCounter1(value) {
    return value = value + 1
}//função pura
console.log(increaseCounter1(counter1), counter1)

var values = [1, 2, 3, 4, 5]
var sum = 0
for (var i=0; i<values.length; i++) {
    sum += values[i]
}//em cada uma das iterações do loop duas variáveis sofrem alteração
console.log(sum)

//como iterar um valor sem usar a mutabilidade? Usando recursão

let list = [1, 2, 3, 4, 5]
let accumulator = 0
function sum1(list, accumulator) {
    if (list.length == 0) {
        return accumulator
    }
    return sum1(list.slice(1), accumulator + list[0])
}
console.log(sum1(list, accumulator), accumulator)// nenhum dado sofre alteração.Então o código é imutável