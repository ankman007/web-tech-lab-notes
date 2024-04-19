// Write a function that finds the longest word in a sentence.

function findLongestWord(sen){
    maxLength = 0;
    longestWord = '';

    sen.split(' ').forEach(element => {
        if (maxLength <= element.length){
            maxLength = element.length;
            longestWord = element;
        }
    });

    return longestWord;
}

const sen = 'hahahaha, this is very good indeed';
console.log(findLongestWord(sen));

