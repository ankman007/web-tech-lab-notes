// Given two strings, return true if they are anagrams of one another

function sortString(str){
    return str.split('').sort().join('');
}

function checkAnagrams(str1, str2){
    return (sortString(str1) == sortString(str2)) ? true : false;
}

str1 = 'They see';
str2 = 'The eyes';

console.log(checkAnagrams(str1, str2));

