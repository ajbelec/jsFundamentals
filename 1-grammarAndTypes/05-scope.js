/*
    SCOPE
    
    -Scope is how a computer keeps track of all of the variables in a program
    -whenever we open up {}, we create a new scope (local scope) any variables that we create that are locally scoped, are only available in that local scope
    -globally scoped variables are accessible anywhere in our document


*/

let x = 12

function scope() {
    let x = 33
    console.log(x)
}

scope() //calling the function by its name, followed by parentheses, 'invokes' or calls the function-telling it to run

console.log(x);

//----------------------------

let y = 12

function newScope(){
    y = 33; //didn't use the let keyword, which means that newScope function CHANGES y variable to 33 rather than making a new one
    y = 44;
    y = 55;
    console.log(y)
}

newScope();//function
console.log(y);

/*
    VAR vs LET

    -while var and let seem to operate the same, they have a lot of the same functionality (both allow us to declare and initialize a variable), they also behave differently

    -var is scoped to the nearest function body {}, and let is scoped to the nearest enclosing body {}
    -

*/

    // var testOne = 'This is a test'
    // let testTwo = 'This is another test'

    // console.log(testOne,testTwo);

//VAR
var x = 12

function varTest(){
    var x = 33
    if (1 ==1){
        var x = 45; console.log(x); // 45
    }
        console.log(x); //45
}

varTest();
console.log(x); //12

// LET

let y = 12

function letTest(){
    var y = 33;
    if (true){
        let y = 45;
        console.log(y);
    }
    console.log(y);
}

letTest();
console.log(y);