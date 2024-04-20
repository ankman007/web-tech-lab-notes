// spread operator

// denoted by ...
// allows an iterable such as an array or a string to be expanded into seperate elements 
// it unpacks the elements

let nums = [11, 22, 33, 44, 55, 112, 332, 556];
let std = 'radar';

let max = Math.max(...nums);
let min = Math.min(...nums);

console.log(max);
console.log(min);

let letters = [...std].reverse().join('');

console.log(letters);

let fruits = ['apple', 'orange', 'grapes', 'banana'];
let vegetables = ['patato', 'carrots', 'cauliflower'];
let foods = [...fruits, ...vegetables, 'eggs', 'milk'];

console.log(foods);


