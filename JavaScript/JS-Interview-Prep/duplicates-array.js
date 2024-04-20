// Print all duplicate elements of an array

const arr = [1, 2, 2, 2, 5, 6, 7, 8, 8, 9, 0, 0];

function duplicates(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        for (let j=i+1; j < arr.length; j++){
            if (!newArr.includes(arr[i]) && arr[i] === arr[j])
                newArr.push(arr[i]);
        }
    }
    return newArr;
}

const duplicateElements = duplicates(arr);

duplicateElements.forEach(item =>{
    console.log(item);
})
