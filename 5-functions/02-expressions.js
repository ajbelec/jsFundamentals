/*
function expressions are stored inside of a variable
*/

let hello = function (){//an unnamed function is known as an anonymous function. Since the function is stored in a variable, we don't need to explicity give the function a name
console.log('hi');
}

hello();//when calling a function expression, the name of the variable is what needs to be called

/*
    Differences between function delcarations and function expressions
    -function declarations are hoisted
    -function expressions are NOT hoisted

*/

//declaration
decTest();
function decTest(){
    console.log('it worked, and I was hoisted');
}

//expression
expTest(); //this will break
let expTest = function () {
    console.log ('didnt worked, and I was not hoisted');
}

decTest();
expTest();