let studentDescription = ["Ankit", 20, "Kirtipur", "NCCS"];

// removes the first element of the array
studentDescription.shift();

// adds the provided element to the first of the array
studentDescription.unshift("BIM");

// removes the last element of the array and returns the popped element
console.log(studentDescription.pop());

// adds the provided element to the last of the array
studentDescription.push("67 Kg");

// returns the lenght of the array
// console.log(studentDescription.);

// converts the array into string
console.log(studentDescription.toString);

// concats two array into one
let tempArray = ["kunal", 28, "DevRel Manager", "Civo"];
console.log(tempArray.concat(studentDescription));

// join the elements of the array into one string
console.log(studentDescription.join('+'));