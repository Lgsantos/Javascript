/* IIFE - Immediately Invoked Function Expression (ou  Self-Executing Anonymous Function ) */

//https://www.youtube.com/watch?v=zCZqoAPVT6o

var result = (function () {
    var nome = "Felipe"
    return nome
})()
// Imediatamente gera a saída: 
console.log(result) // "Felipe"

const fun = function () {
    console.log('Hello!!')
}() //não precisei envocar a função! Ela se envocou sozinha!

!function (){
    console.log('Hello 2!!')
}() /* Não consegui fazer a IIFE funcionar encapsulando-a entre (), mas aprendi que colocando qualquer operador unário (!,+,-,*,^,~,/) na frente, funciona (além de reduzir o número de caracteres do programa e, consequentemente, o número de bytes do mesmo, reduzindo seu tempo de carregamento - minify, minification) */

!function(input){
    console.log('Sou uma IIFE e seu input foi:', input)
}(7)

/* 
Há quatro vantagens no uso de IIFE:
- Avoids Polluting outer scope
- prevents memory leakage
- Implements modular design
- minify & reduce scope lookups
*/

/*Avoids Polluting outer scope: 

em grandes projetos, nomeação de funções e variáveis pode gerar problemas, pois podemos usar, sem saber, o mesmo nome para algumas delas, gerando um conflito de definição.
Encapsulando código dentro de IIFE evita que suas variáveis estejam disponíveis em outros escopos fora da função anônima. Assim, mesmo que haja outras declarações de variáveis com o mesmo nome, não haverá conflito.

Prevents memory leakage:
como a IIFE e suas variáveis não ficam disponíveis após a auto invocação, toda a memória utilizada fica imediatamente disponível após usa execução (diferentemente de funções comuns)
*/
