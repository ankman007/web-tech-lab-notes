// Write a function that checks if a given string is a palindrome.

str = 'radar';

function isPalindrome(str){
    return (str.split('').reverse().join('') == str) ? true : false;
}

console.log(isPalindrome(str));

