let btn = document.getElementById('button');
let text = document.getElementById('para');
const orignalText = text.innerHTML;

let isChanged = false;

const changeText = () =>{
    if(isChanged){
        text.innerHTML = orignalText;
    }
    else{
        text.innerHTML = "Changed";
    }
    isChanged = !isChanged;
}
btn.onclick = changeText;