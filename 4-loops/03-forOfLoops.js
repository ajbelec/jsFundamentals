/*
    FOR OF LOOPS
    -where for in loops look at enumerables, or countable properties, for of Loops look at iterable properties

    -iterable properties are properties that we can parse through with numbers, or indices

    for in loops: better suited for objects
    for of loops: better suited for arrays
    
*/
//using a for of loop with an object will throw an error since for of loop's look at iterable properties
let student = {
    //  key     value       -values are assigned using a : not an =
        name: 'Peter',
        awesome: true,
        degree: 'Javascript',
        week: 1
    }

for (let item of student){ //will get error as student is not iterable
    console.log(item) 
}

let catArray = ['tabby','british shorthair','burmese','maine coon', 'rag doll'];

for (let cat of catArray){
    console.log(cat);
}