/*
    -arrays are containers that hold a list of items
    -arrays are denoted by []
    -arrays can hold numerous data types
*/

let list = ['orange','banana','apple'];

console.log(list[2])

/*
    -when we call an array, we can append square brackets onto the end of our array with the index number that we want to reference
    -javascript starts counting at 0
*/

let students = ['Amruta','Marco','Nick','Carolina',4,true, ['Adam', 'Alexandra','Alexia','Allyson']];

console.log(typeof students); // object is a datatype that represents multiple values of data--arrays are technically read as objects
console.log(students instanceof Array)//the instanceof operator is used to check the type of an object at runtime. will return a true or false value
console.log(students[2]);//Nick
console.log(students[1]);//Marco

//Challenge: pull out a single value from the nested array
console.log(students[6][2]);
let name = students[6][1];
console.log(name);//Alexandra