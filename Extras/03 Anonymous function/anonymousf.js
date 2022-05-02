const x = function (a, b) {return a * b}
let z = x(4, 3)
console.log(z)
/* The function above is actually an anonymous function (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name. */

// The Function() Constructor
const myFunction = new Function('a', 'b', 'return a * b')
let w = myFunction(4, 6)
console.log(w)