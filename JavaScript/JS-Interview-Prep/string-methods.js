// String primitive
let message = 'hello there';

// String object
let another = new String('hi');

console.log(typeof(message));
console.log(typeof(another));

// String methods

// length
console.log(`\n\nlength method: ${message.length}`);

// charAt
console.log(`charAt method: ${message.charAt(2)}`);

// concat
let str = ' my friend!!';
console.log(`concat method: ${message.concat(str)}`);

// indexOf
console.log(`indexOf method: ${message.indexOf('e')}`);

// substring
console.log(`substring method: ${message.substring(1)}`);

// slice
console.log(`slice method: ${message.slice(2, 4)}`);

// toLowerCase & toUpperCase
let message1 = 'HHHLL';
console.log(`toLowerCase method: ${message.toUpperCase()}`);
console.log(`toLowerCase method: ${message1.toLowerCase()}`);

// includes
console.log(`includes method: ${message.includes('th')}`);

// startsWith
console.log(`startsWith method: ${message.startsWith('h')}`);

// endsWith
console.log(`endsWith method: ${message.endsWith('e')}`);

// replace
console.log(`replace method: ${message.replace('th', 'hahaahhaha')}`);




