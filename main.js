// Basics of JavaScript

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/



// String Variable
var first_name = 'Zack';

// Display our value to the JS Console
console.log(first_name);

// assign an integer
var some_number = 32;
console.log(some_number);

// show all atributes of a document or id
console.dir(document);

// float variable
var some_float = 3.141592;
console.log(some_float);

// array
var some_array = [1,2,3,4];
console.log(some_array);

// objects
var some_object = {'Yee': 'haw'};
console.log(some_object);

// js hoisting
a_num = 10;
console.log(a_num);
var a_num;
console.log(a_num);

console.log(some_random_variable);
var some_random_variable = 'This is a random variable';
console.log(some_random_variable);

// a better way of declring a variable is by using 'let' and 'const' keywords

let x;
console.log(x);
x = 3;
console.log(x);

// const y = 5;
// console.log(y);
// y = 6;

// basic math operations

// adding
let sum = 5+5;
console.log(sum);

// subtraction
let dif = 5-4;
console.log(dif);

// multiplication and division same as python, exponents as well

// some other math operations
// finding the floor of a decimal
let find_floor = Math.floor(5.8);
console.log(find_floor);
// Math.ceil(n)

// mind bender
let crazy_stuff = some_float + '4';
console.log(crazy_stuff);

let crazy_stuff_2 = some_float + parseFloat('4');
console.log(crazy_stuff_2);

// regular named functions
function addNums() {
    let num = 4;
    let num2 = 5;

    return num + num2;
}

console.log(addNums());

let addNum2 = function(num, num2){
    return num + num2;
}

console.log(addNum2(6,7));

// ES6+ Arrow function in JS
// our first example shows how to use a single parameter function without parentheses
// this can only be done with one parameter if you dont want to use parentheses

let cubed = num => {
    return num**3;
}

console.log(cubed(4));

let cubed2 = (num) => {
    return num**3;
}

console.log(cubed2(4));

let toThePower = (num,power) => {
    return num ** power;
}

console.log(toThePower(4,3));

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello;
})('Joel'));

// control flow
// if statements
function determineAge(age){
    if (age < 18){
        return 'Minor';
    } else if (age >= 18 && age < 65){
        return 'Adult';
    } else {
        return 'Senior';
    }
}

console.log(determineAge(65));

// ternary operators 
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age < 65) ? 'Adult not retired' : 'Elderly person not retired';
}

console.log(determineAge2(82));

// loooops
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i);
    }
    return 'Counting has stopped';
}

console.log(countByOne());

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}
console.log(count_with_while());

// do while loop
function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += `this number is... ${i} \n`;
        i++;
    }

    while(i < 10)
    return text;
}

console.log(countWithDoWhile());

// create an array
let group_of_names = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty'];

console.log(group_of_names[0]);

// loop an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i]);
    }
    return 'done';
}

console.log(showAllNames());

// method 2
console.log(group_of_names.forEach(element => console.log(element)));

// js method array.toString()
console.log(group_of_names.toString());
console.log(typeof(group_of_names));

// map filter reduce

// .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i;
    } else{
        return false;
    }
})

console.log(b_names);

// long form of .map()
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i]);
        }
    }
    return test_array;
}

console.log(b_names_test());

// .filter()

let long_names = group_of_names.filter( element => element.length > 4);
console.log(long_names);

// .reduce()

const nums = [2,4,6,8,10];

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num;
})
console.log(nums_reduced)

// you can also use methods like .join .slice .search .splice 