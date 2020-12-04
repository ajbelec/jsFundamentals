/*
falsy values-a falsy value is a value that is considered false when encountered in a Boolean context
-6 cases of falsy values in javascript
1.false
2. 0
3."",'',``
4.null
5.undefined
6.NaN (not a number)

This means that when javascript is expecting a boolean, and instead it sees one of the above values, it always evaluate to "falsy"

*/

let isOn= true;

if (isOn==true)//read as "if the variable isOn is EQUAL to true, run body"
{console.log("The Light is on!")}; //This is the body of the if statement

if (isOn){console.log("The Light is Still on")};//read as "if isOn is true, run the body"

let isOff=false;
if (isOff==false) {console.log("The Light is now off")}; //if isOff is EQUAL to false, run body

let weather = 75;
if (weather<70){console.log("Wear a jacket")};

