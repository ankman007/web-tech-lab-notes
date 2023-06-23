let redBox = document.getElementById('red');
let blueBox = document.getElementById('blue');
let greenBox = document.getElementById('green');

let btn = document.getElementById('button');

const changeStyle = () =>{
    redBox.style.backgroundColor = 'red';
    blueBox.style.backgroundColor = 'blue';
    greenBox.style.backgroundColor = 'green';
}

btn.onclick = changeStyle;
