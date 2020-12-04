/*
-loops offer us a quick and easy way to do something repeatedly, or loop over something

-there are many different kinds of loops, but they all do roughly the same thing:
    - the loop will repeat until a specified condition evaluates to false

    -for loop
    -do while loop
    -while loop
    -for in
    -for of

    -for loop takes in 3 parameters
        1. Initial expression
        2. Condition
        3. Increment expression
        for (Initial expression; condition ; increment expression)

        *** separated by semi colon
*/
//   1.)set var    2.set condition    4. incrementer
for (let i = 0;         i <= 10;         i++) {//i++1 = i += i + 1
    //3. for loop body: code to be ran if condition is not false 
    console.log (i);
}

//Challenge: using a for loop, count to 20 by 2 

for (x=0; x<=20; x += 2) {
    console.log(x);
}

//Challenge: using a for loop, count from 10 to 0 going down by 1

for (x=10; x >=0; x -- ) {//x-- is equal to x -= 1
    console.log(x);
}

for (x=0; x >=-24; x -=2 ){
    console.log(x)
}

//Challenge: using a for loop, go through a name and display each letter individually

let name = 'Andrew';
for (let x = 0;x < name.length; x ++)
{//console.log(name.charAt(x));
console.log(name[x]);
}

//Challenge: write a for loop that adds up all numbers from 1-50 (should equal 1275)
let sum=0
for (let x=1; x<=50; x++){
    sum += x;
   console.log(sum);
}
