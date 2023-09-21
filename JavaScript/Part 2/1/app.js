function result(){
    let num = document.getElementById('number').value;
    let str = document.getElementById('text').value;
    let dispayElement = document.getElementById('display');
    
    if(num == '1996' && str == 'JavaScript'){
        dispayElement.innerHTML = 'Welcome';
        console.log('vkjnfkjs')
    }
    else{
        console.log(num + str)
        num.innerHTML = "";
        str.innerHTML = "";
        dispayElement.innerHTML = 'Please enter the correct values in the text field.'
        console.log('jnjkk')
    }
}
