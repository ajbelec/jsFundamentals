/*
    PARAMETERS

        -A parameter is a placeholder for data that we pass into the function when we call the function
                        1.
        function hello(name){
            console.log('hello ${name}');
        }                         2.  
                  3.
        hello ('Andrew');
        
        1. this is the parameter that the function is holding. this is just a placeholder
        2. by calling the parameter name, it will print the value given to 'name' when the function was called
        3. this is the data that we're passing into the function, and that the parameter 'name' will then hold

        -parameters can be named anything, just like variables
*/      
//let name = biff
function hello(name){
    console.log(`hello ${name}`);
}

hello('biff');//when we call the function is where we need to pass in the data that we want to assign to the parameter

function zach(ticket){
    console.log(`I exchanged my ticket for a ${ticket}`)
}

zach('cheese pizza'); //if you have no parameter or placeholder, then your function will not be able to accept any data

//CHALLENGE: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. inside of the function, reference the two parameters in a console.log statement that prints off your full name

function fullName(firstName,lastName){
    let myFullName = firstName + ' ' + lastName; 
    console.log(`${firstName}`+' '+ `${ lastName}`);
}

fullName('Andrew','Belec');
function whatDoesItDo(val) {
    return val ? 1 : 2;
  }; 

   

function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 
 
 console.log(whatDoesItDo());