//https://www.w3schools.com/js/js_callback.asp
function myDisplayer(some) {
    console.log(some)
}

function myCalculator(num1, num2) {
    let sum = num1 + num2
    return sum
}

function myCalculator1(num1, num2) {
    let sum = num1 + num2
    myDisplayer(sum)
}

function myCalculator2(num1, num2, myCallback) {
    let sum = num1 + num2
    myCallback(sum)
}

function myDisplayer1(some) {
    console.log('*** ' + some + ' ***')
}

let result = myCalculator(5, 5)
myDisplayer(result)//The problem here is that you have to call two functions to display the result.

myCalculator1(5, 5)//The problem here is that you cannot prevent the calculator1 function from displaying the result.

myCalculator2(5, 5, myDisplayer)
myCalculator2(5, 5, myDisplayer1)//callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

//Callbacks with Asynchronous functions (Functions running in parallel with other functions)
setTimeout(myFunction, 3000)//myFunction is used as a callback

function myFunction() {
    return console.log('I love you!!')
}

setInterval(myFunction1, 1000)

function myFunction1() {
    let d = new Date()
    console.log(d.getHours()+' '+d.getMinutes()+' '+d.getSeconds())
}