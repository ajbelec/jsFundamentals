//Comparison operators allow us to check if two values are equal to each other or not equal to each other

//EQUAL

"3" == 3;
console.log("3" == 3);

/* 
-coercion is the process of converting a value from one type to another
-above, javascript assumes that we are trying to check if a number 3 is equal to another number of 3
even though one of those values is a string
*/

//STRICT EQUAL-this overrides javascript coercion that normally happens in background
console.log(3 === 3)
console.log("3"=== 3)

//NOT EQUAL
console.log("3" != 3)

//STRICT NOT EQUAL-overrides javascript
console.log ("3" != 4);
console.log (4 !== 5);

//GREATER THAN

3 > 2//TRUE

//LESS THAN

2 < 3//TRUE

//GREATER THAN OR EQUAL TO

3 >= 2//TRUE

//LESS THAN OR EQUAL TO

2 <=3; //TRUE

//AND
2 & 3;

//OR-the "pipes" often referred to in code
2||3