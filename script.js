console.log('Hello World') // console log is a debugging tool used to log to the console 
// node script.js - node is a way to execute js. 

// Conditional expressions - In js we use true/truthy & false/falsey 

if ("abc" === "cde") {
    console.log("truthy!")
} else {
    console.log("falsey!")
}
//we can easily test expressions (even strings) by typing it in the place of true
// empty strings are falsey 
// any string that has values inside is: truthy 
// null is falsey
// values that are falsey: false, zero, NaN, empty string 

//The Not Operator (!)
    // also known as the "bang" operator, a true or truthy expression to boolean value of false and vice versa. 

console.log(!false === true) // true 
console.log(!null === true) // true 
console.log(!3 === false) // true 
console.log(!"" === true) // true 

console.log(!!3) // it takes the value and outputs the boolean value 




