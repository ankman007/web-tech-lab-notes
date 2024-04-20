// Find the frequency of elements in array

const arr = [1, 2, 2, 2, 5, 6, 7, 8, 8, 9, 0, 0];

function findFrequency(arr){
    let freq = {};

    arr.forEach(item =>{
        if (freq[item])
            freq[item]++;
        else
            freq[item] = 1;
    })

    return freq;
}

console.log(findFrequency(arr))

