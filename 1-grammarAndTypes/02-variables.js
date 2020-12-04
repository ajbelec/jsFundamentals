/*
-Variables are named containers for storing data values or data types
-Give variables a specific name
*/

    let    number    =    2;
/*  (1)     (2)     (3)  (4)
1-javascript keyword
2-variable name
3-assignment operator
4-value of the variable
*/

let numberOne=5
let numberTwo=3

console.log(numberOne+numberTwo)//output of 8

/*
-variable must begin with letter,underscore, or a dollar sign
-number may follow above characters but cannot come first
-camelCase is best practice for variable names
-javascript is case sensitive-'hello' and 'Hello' are different
-no spaces in variable names
*/

/*
var, let, const

-var:'old' name for variables
-let:'new', most commonly used name for variables
-const:name to variable, variables are unchangeable, results in error. Declares an unchangeable value
*/
/* 
-declarations are the LEFT side of the assigment operator when writing a variable
-initialization is the RIGHT side of the assignment operator (the value we assign to a variable)
*/

let x;
console.log('Declaration',x);

x=10;
console.log('Initialization',x);

x=20;
console.log('reIniatilization',x);
