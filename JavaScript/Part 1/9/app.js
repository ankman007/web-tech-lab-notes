let num1, num2;

function getNumber(){
    num1 = parseInt(document.getElementById('number-1').value);
    num2 = parseInt(document.getElementById('number-2').value);
}
function clearInputField(){
    document.getElementById('number-1').value = "";
    document.getElementById('number-2').value = "";
}

function addition(){
    getNumber();
    let list = document.getElementById('operations');
    let listItem = document.createElement('li');
    listItem.textContent = num1 +" + "+ num2 +" = "+ (num1 + num2);
    list.appendChild(listItem);
    clearInputField();
}

function subtraction(){
    getNumber();
    let list = document.getElementById('operations');
    let listItem = document.createElement('li');
    listItem.textContent = num1 +" - "+ num2 +" = "+ (num1 - num2);
    list.appendChild(listItem);
    clearInputField();
}

function multiplication(){
    getNumber();
    let list = document.getElementById('operations');
    let listItem = document.createElement('li');
    listItem.textContent = num1 +" * "+ num2 +" = "+ (num1 * num2);
    list.appendChild(listItem);
    clearInputField();
}

function division(){
    getNumber();
    let list = document.getElementById('operations');
    let listItem = document.createElement('li');
    listItem.textContent = num1 +" / "+ num2 +" = "+ (num1 / num2);
    list.appendChild(listItem);
    clearInputField();
}