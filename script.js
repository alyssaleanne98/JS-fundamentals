console.log('Hello World') // console log is a debugging tool used to log to the console 
// node script.js - node is a way to execute js. 

// Conditional expressions - In js we use true/truthy & false/falsey 
    // a statement that can be written in the form "if P then Q" where P and Q are sentences.

if ("abc" === "cde") { // === strict equal checks whether its two operands are equal 
    console.log("truthy!")
} else {
    console.log("falsey!")
}

if ("cde" === "efg") {
    console.log("truthy") 
} else {
    console.log("falsey")
}

if ("alyssa" === "alexis") {
    console.log("truthy!")
} else {
    console.log("falsey")
}
//we can easily test expressions (even strings) by typing it in the place of true
// empty strings are falsey 
// any string that has values inside is: truthy 
// null is falsey
// two data types that are falsey: null and undefined.
// values that are falsey: false, zero, NaN, empty string 

//The Not Operator (!)
// also known as the "bang" operator, a true or truthy expression to boolean value of false and vice versa. 

// console.log(!false === true) // true 
// console.log(!null === true) // true 
// console.log(!3 === false) // true 
// console.log(!"" === true) // true 

// console.log(!!3) // it takes the value and outputs the boolean value 
console.log(!true === false)

// Boolean Logic - Comparison Operators 

// === strict equality
// logical operators || (OR) always returns the first operand if it is truthy, otherwise the second operand is returned. 

"hello" || "goodbye" // evaluates to 'hello' first 
0 || null // evaluates to null 

//the logical && (AND) operator always returns the first operand if it is falsey, otherwise the second operand is returned: 

"hello" && "goodbye" // evaluates to the last truthy = 'goodbye'
0 && null // evaluates to 0 

console.log("hello" || "goodbye")

console.log("3" || "0")

if (false || 0 || null || undefined) { // this gets reduced down to undefined which is falsey
    console.log("truthy")
} else {
    console.log("falsey")
}

console.log(("a" && "b") || (false, undefined))
console.log("4" || "0")
// you can have OR and AND 
// if we go left to right, we are introducing two sets of conditionals and comparing the two conditionals with OR ||
// first conditional is "true" and second conditional is "false"
// when we console.log, "b" will return 
// it will then look at the second conditional statement and see false. 
// "b" || false --> b will return 

// Conditional Expressions -- continued

let x = 1 // we initialize the x variable to 1. x = 1
while (x <= 10) { // then we have set of code (lines62-66) with a a conditional that is basically going to execute until the conditional turns false. How do we get it to turn false? By updating the variable every iteration of the loop.
    var msg = "Item" + x
console.log(msg)
x++ // what is x++? it is incrementing x by 1 
}
// once x reaches > 10, the statement evaluates to false 
// 1:12 recording 

let z = 3
while (z <= 5) {
    var text = "Number" + z
    console.log(text)
    z++
}

