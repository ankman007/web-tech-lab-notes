// rest parameters

// ...rest 
// allows a function to work with a variable number of arguments by bundling them into an array
// it bundles seperate elements into an array

const f1 = 'pizza';
const f2 = 'panipuri';
const f3 = 'chatpate';
const f4 = 'valepuri';
const f5 = 'ramen';

function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods){
    return foods;
}

const foods = getFood(f1, f2, f3, f4, f5);
console.log(foods);

function sum(...vars){
    let result = 0;
    for (let num of vars){
        result += num;
    }
    return result;
}

const total = sum(2, 3, 4, 5, 6, 7, 8);
console.log(total);

function combineString(...str){
    return str.join(' ');
}

const stringToCombine = combineString('My', 'name', 'is', 'what', 'my', 'name', 'is', 'who');

console.log(stringToCombine);



