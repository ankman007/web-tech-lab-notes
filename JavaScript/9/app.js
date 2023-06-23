let firstNumber = parseInt(document.getElementById('number-1'));
let secondNumber = parseInt(document.getElementById('number-2'));

let mulButton = document.getElementById('multiplication');
let addButton = document.getElementById('addition');
let subButton = document.getElementById('subtraction');
let divButton = document.getElementById('division');


const mul = () =>{document.write(firstNumber + " * "+secondNumber + " = "+firstNumber*secondNumber)}
const add = () =>{document.write(firstNumber + " + "+secondNumber + " = "+firstNumber+secondNumber);}
const sub = () =>{document.write(firstNumber + " - "+secondNumber + " = "+firstNumber-secondNumber);}
const div = () =>{document.write(firstNumber + " / "+secondNumber + " = "+firstNumber/secondNumber);}

mulButton.onclick = mul;
addButton.onclick = add;
subButton.onclick = sub;
divButton.onclick = div;