let word = 'hellp'

// using built-in function
let newWord = word.split('').reverse().join('');
console.log(newWord);

// using loop
let loopReverse = '';
for (let i=word.length-1; i>=0; i--){
    loopReverse += word[i];
}
console.log(loopReverse);

