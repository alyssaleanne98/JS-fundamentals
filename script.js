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

let age = 23 
while (age <= 24) {
    var msg = "Alexis is" + age
    age ++ 
    console.log(age)
}

let a = 6 
while (a <= 8) {
    var msg = a + " is the perfect time "
    a++
    console.log(msg)
}

let alex = 20
while (alex <= 21) {
    var msg = "She is " + alex 
    alex ++
    console.log(msg)
}

// Branching statement 

if (alex === 12)
console.log("This code will run only if alex equals 12 ")

const color = "green"
if (color === "green") {
    console.log("Go")
} else if (color === "yellow") {
    console.log("Slow down")
} else if (color === "red") {
    console.log("Stop")
}


// Ex 2.

// Write an if...else if statement that checks the value of a variable named score and logs the corresponding letter grade to the console:

const score = 95 // naming the variable 'score'
if (score >= 90) {
    console.log("A")
} else if (score >= 80) {
    console.log("B")
} else if (score >=70) {
    console.log("C")
} else if (score >=60) {
    console.log("D")
} else {
    console.log("F")
}

// Ex 3. 

// Write a function named greet that takes a string argument name and logs a personalized greeting to the console.

// If name is undefined or null, log "Hello, stranger!"
// If name is a string, log "Hello, <name>!" where <name> is the value of name.

// function named 'greet'

function greet(name) {
    if (!name) {
        console.log("Hello stranger!");
    } else if (typeof name === "string") {
        console.log(`Hello, ${name}!`);
    }
}
greet ("Alyssa");

// Ex 4. 
function sumArray (numbers) { // numbers is the argument
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers [i];
    }
    return sum;

}

// Ex 5.
// function sumArray(numbers) // function named sumArray that passes in a single parameter of 'numbers'. A parameter is a named variable and is used to receive the value of an argument that is passed to the function when it is called.
// const numbers = [1, 2, 3]; // we defined an array of numbers and then called the sumArray function with this array as an argument. 
// const sum = sumArray(numbers);
// console.log(sum);

//Diagram to illustrate the difference between parameters and arguments
// +---------+
// | function|
// |         |
// |  greet  |
// |         |
// +---------+
//       |
//       | parameter
//       V
// +---------+
// |   name  |
// +---------+
//       |
//       V
// +---------+
// argument        |  "Alice"|
// passed to       +---------+
// the function         |
//       V
// logs "Hello, Alice!" to the console

// +---------+
// | function|
// |         |
// |  greet  |
// |         |
// +---------+
//       |
//       | parameter
//       V
// +---------+
// |   name  |
// +---------+
//       |
// argument            V
// passed to       +---------+
// the function         | "Bob"  |
// +---------+
//       |
//       V
// logs "Hello, Bob!" to the console



// Looping statement while 

let num = 0
do {
    console.log(num)
    num+=2
} while (num <= 10) 

// Looping statement for 

let colors = ["red", "blue"]
for (let idx = 0; idx < colors.length; idx++) {
    console.log(colors[idx])
}


