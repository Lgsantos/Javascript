//https://www.w3schools.com/js/js_arrow_function.asp
function hello() {
    return 'Hello World!'
}

hello1 = function() {
    return 'Hello World!'
}

hello2 = () => {//Arrow functions allow us to write shorter function syntax
    return 'Hello World!'
}

hello3 = () => 'Hello World!'//If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword

/*console.log(hello())
console.log(hello1())
console.log(hello2())
console.log(hello3())*/

//Arrow Function With Parameters
hello = (v) => 'Hello ' + v
hello2 = val => 'Hello ' + val//if you have only one parameter, you can skip the parentheses

console.log(hello(4))
console.log(hello2(5))