/*
Boolean
-a boolean has two possible values of either true or false
*/

let lightIsOn=true;
console.log(lightIsOn);

let lightIsOff=false;
console.log(lightIsOff);

/*
Null
-Null is an empty value. Think of it as an empty container:nothing is in it,but it does exist as a space to fill
*/

let empty=null;
console.log(empty);

/*
UNDEFINED
-no value has been assigned, and it does NOT act as an empty container
*/

let undef=undefined;
console.log(undef);

let correct;
console.log(correct);

/*
Numbers
-Numbers or integers are literally just numbers, Numbers do not need anything special when being written
*/

let degrees=40;
console.log(degrees);

let precise=999999999999999;
console.log(precise)

let rounded=9999999999999999;
console.log(rounded)

let a = Number('123')
console.log(a)

/*
STRINGS
-Strings are datatypes used to represent text and are either wrapped in single or double quotes
*/

let stringOne="Double Quotes";
let stringTwo='Single Quotes';//String concatenation-takes two strings and combines them into one
console.log(stringOne, stringTwo);

let first= 1050 + 100;
let second='1050' +'100';
console.log(first,second);

console.log(typeof first);//number
console.log(typeof second);//string

let third= 1050 + '100';//assumes first number is a string, converts it
console.log(third);
console.log(typeof third);//string

/*
OBJECTS
-Objects allow us to store multiple values instead of a single value
*/

let frodo = {
    race: 'hobbit',
//  key    value
    rings: 1,
    cloack: true
}
console.log(frodo)

/* 
ARRAYS
-Arrays are containers that hold a list of items
-denoted by square brackets []
*/

let burritos = ['large',4,true];
console.log(burritos);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Andrew'
let lastName = 'Belec'
let aptNumber = 1050
let street= 'Woolman Drive'
let city= 'Richmond'
let state='Indiana'
let zipcode=47374

console.log(firstName,lastName +',',aptNumber,street + ',',city + ",",state,zipcode);

console.log(7 % 3);