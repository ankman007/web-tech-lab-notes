// Write a function that reverses a given string.

// Using for loop
function reverseString(str){
    res = '';
    for (i=str.length-1; i>=0; i--)
        res += str.charAt(i);
    return res;
}

const output = reverseString('this keyword');
console.log(output);

// Using built-in string methods
function reverseUsingMethods(str){
    return str.split('').reverse().join('');
}

const output1 = reverseString('this keyword');
console.log(output1);

// Using recursive approach
function reverseUsingRecursion(str){
    if (str == 0)
        return '';
    else {
        return reverseUsingRecursion(str.substring(1)) + str.charAt(0);
    }
}

const output2 = reverseUsingRecursion('this keyword');
console.log(output2);
