// Find the nth largest element in a sorted array

const arr = [1, 2, 2, 2, 5, 6, 7, 8, 8, 9, 0, 0];

const removeDuplicates = arr.filter((item, index) =>{
    return arr.indexOf(item) == index;
})
const sortedArray = removeDuplicates.sort().reverse();

console.log(sortedArray);


