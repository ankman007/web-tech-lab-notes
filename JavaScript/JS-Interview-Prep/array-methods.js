const items = [
    { name: 'Bike', price: 100},
    { name: 'Cycle', price: 6},
    { name: 'Skate Board', price: 2},
    { name: 'Car', price: 200},
    { name: 'Jeep', price: 250},
    { name: 'Truck', price: 300},
];

// forEach
items.forEach(item =>{
    console.log(item.price);
});

// map
const itemPrice = items.map(item => {
    return item.price;
});
console.log(itemPrice);

// filter
const expensiveItems = items.filter(item =>{
    return item.price >= 200;
});
console.log(expensiveItems);

// reduce
const total = items.reduce((currentTotal, item) =>{
    return item.price + currentTotal;
}, 0)
console.log(total)

// find
const cycleDetails = items.find(item =>{
    return item.name == 'Cycle';
});
console.log(cycleDetails);

// some
const hasCheapItems = items.some(item =>{
    return item.price < 5;
});
console.log(hasCheapItems);

// every
const isEveryItemCheap = items.every(item =>{
    return item.price <= 100;
});
console.log(isEveryItemCheap);


let selectedColors = ['red', 'blue', 'black', 'pink', 'yellow', 'orange', 9, true, 'green'];
console.log(selectedColors)

// length
console.log(selectedColors.length);

// concat
arr = ['one', 'two', 'three'];
console.log(selectedColors.concat(arr));

// pop
console.log(selectedColors.pop());

// push
console.log(selectedColors.push());

// shift
console.log(selectedColors.shift());

// unshift
console.log(selectedColors.unshift());

// join
console.log(selectedColors.join(arr));

// slice
console.log(selectedColors.slice(2));

// splice
console.log(selectedColors.splice(3, 6));

// lastIndexOf
console.log(selectedColors.lastIndexOf('blue'));

// includes
console.log(selectedColors.includes('red'));
console.log(selectedColors.includes('gray'));










