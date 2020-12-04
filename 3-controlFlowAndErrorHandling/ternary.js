/* Ternary 
-A cleaner way of writing if / if else statements (especially for shorter ones)
-
*/


//Ternary:
let x=6;
(x > 0) ? console.log("Yes") : console.log("No");
// (condition) ? code to run if condition is true : code to run if condition is false



/*
CHALLENGE
************
    Write a ternary that does the same thing as the age challenge
    Age Challenge (if else):
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 21;
(age <=17 && age <18) ? console.log("Sorry, you're too young to do anything fun.") 
: (age >=18 && age <21) ? console.log("Yay! you can vote!")
: (age >=21 && age<25) ? console.log("You can drink!")
: (age >=25) ? console.log("Yay! You can rent a car!"): console.log(age);