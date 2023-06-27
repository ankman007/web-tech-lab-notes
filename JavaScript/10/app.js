
let isChangeApplied = true;

function mouseEvent(){
    const originalText = document.getElementById('para').textContent;
    const originalBoxColor = document.getElementById('box').style.backgroundColor;

    const box = document.getElementById('box');
    const text = document.getElementById('para');

    if(isChangeApplied){
        text.textContent = 'Changed';
        box.style.backgroundColor = 'grey';
        
        isChangeApplied = false;
    } 
    else{
        text.textContent = originalText;
        box.style.backgroundColor = originalBoxColor;
        
        isChangeApplied = true;
    }    
}