/*
        OBJECT BRACKET NOTATION

        -bracket notation can also be used with objects to pull out values just like we would with an array

        -object bracket

*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10, 
}

//keys in an object are strings, even though we don't need to explicity wrap them in quotes
let test = Object.keys(garden);//object.keys() will return us an array of all of the keys in the referenced object
console.log(test);
console.log(typeof test[0]);

let zucchini = garden['vegetable'];//we can access keys in an object by specifiying the name of the object that we want to reference, followed by the keys named in square brackets. The key name that we pass into the square brackets need to wrapped in quotes, since all keys in objects are strings.
console.log(zucchini);

// setting a new key/value pair in an object using square bracket notation
let baking = {};
baking['zucchini'] = 'better make some bread!';
console.log(baking);

console.log(baking[garden['vegetable']]) //