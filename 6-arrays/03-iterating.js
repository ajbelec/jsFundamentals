
/*
        ITERATING

        -
*/
//regular for loop
let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog']
for (let i=0;i<food.length;i++){
    console.log(food[i])
}

// forEach() method
food.forEach(function(foodItem){
    console.log(foodItem)
})

//forEach() method- fat arrow function
food.forEach(foodItem=> console.log(foodItem));

//------------------
let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog']

for (let i=0; i<food.length;i++){
    listMyFood(food[i])
}

function listMyFood(foodItem){
    console.log(foodItem)
}

//Challenge: in the forEach() method, include the optional index parameter, and print that index to the console

let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog']

food.forEach((foodItem,index) => console.log(foodItem,index));

/*
Challenge: create an array containing movies
use .foreach to list your movies
*/
let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
movies.forEach(element => console.log(element));
movies.push('Force Awakens');
movies.splice(3, 1, 'The Rise of Skywalker')
console.log(movies);