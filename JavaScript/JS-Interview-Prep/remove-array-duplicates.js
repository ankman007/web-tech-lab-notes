// Write a function that removes duplicates from an array.

const marks = [14, 15, 16, 17, 14, 15, 10, 19, 21, 15, 25, 24, 15, 25];

function removeDuplicates(arr) {
    return arr.filter((item, index) => 
        arr.indexOf(item) === index);
}

const newArr = removeDuplicates(marks);

console.log(newArr);

