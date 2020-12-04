/*
    ARROW FUNCTIONS (also called fat arrow functions)

    -more concise way to write function expression (do not get hoisted)
    -not a function declaration
    -there are a couple different ways to write them
*/

// BLOCK BODY ARROW FUNCTION
let hello = () => { //any parameters that your function may hold, will go inside of the set of parentheses
    console.log('hello world')
}
hello();

//regular function expression
let hello = function () {
    
}

// CONCISE BODY ARROW FUNCTION
let hello = ()  => console.log('Hello world');
hello();

/*
    NOTE: concise body arrow functions return any value by default, whereas block arrow functions do not- we need to implicitly specify what value we want to return
*/

    // function hello(){
    //     let myVar = 'this is my variable';

    //     return myVar;
    // }

// CONCISE BODY VS BLOCK BODY

//concise body arrow function
let apples = number => console.log(`There are ${number} apples`);//when we have a single parameter, do not need parentheses around it. Still need parentheses with no parameters or multiple paramters

apples(10);

// block body  arrow function
let apples = (number) => {
    console.log(`There are ${number} apples.`);
}

apples(10);
apples(false);
apples('biff');

//when your function needs to form more complex tasks or multiple tasks, it's preffered to use a block body arrow function, when your function needs to perform a singular or very simple task, concise body is preferred

