/*
    FOR IN LOOPS

        -great ofr iterating over values in an object. Properties in an object are what's known as enumerable properties (properties that can be counted)
*/

//objects hold what are called key/value parts
let student = {
//  key     value       -values are assigned using a : not an =
    name: 'Peter',
    awesome: true,
    degree: 'Javascript',
    week: 1
}

for(let item in student) {
    console.log(item) //gives the key
    console.log(student[item]) //gives the value of the key
}

let catArray = ['tabby','british shorthair','burmese','maine coon', 'rag doll'];

for (let cat in catArray) {
    console.log(cat); //returns index value in array
    console.log(catArray[cat])//pull out actual value in array
}

//Chalenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let name = "sPongeBoB"
let capName;
for (name.str in name){
    name[0] == name[0].toUpperCase()
    name.slice(1) == name.slice(1).toLowerCase()
    console.log(name[0] + name.slice(1));
}

let name = "sPongeBoB"
let capName;
for (let index in name){
    //console.log(index); //gives indexes of name variable
   if (Number(index) === 0 ) {
    capName = name[index].toUpperCase(); 
   } else {
    capName += name[index].toLowerCase();
   }
}

console.log(capName);