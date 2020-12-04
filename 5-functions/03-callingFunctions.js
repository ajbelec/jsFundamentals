//Calling functions

function hello() {
    console.log('hi');
}

hello(); // hi

//hello; //nothing happens
//hello();// hi
//console.log(hello); //[Function: hello]
console.log(hello())//hi, then undefined; function call happens before anything us, giving us undefined

//Challenge : create a function tat, when invoked, prints out the numbers 1-10

function count(){
    for (x=1;x<=10;x++){console.log(x)}
}
count();
count();

//CHALLENGE: given the array, create a function that lists out the values individually

let arr = ['This', 'is','really','cool'];

function sep (){
    for (let words in arr){
        console.log(arr[words])
    }
}

sep();