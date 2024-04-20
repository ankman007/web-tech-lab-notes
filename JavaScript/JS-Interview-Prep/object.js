// object
// a collection of related properties and methods 
// an object can be a real-world object like people, products, places
// object = {key: value, function()}

const person = {
    firstName: "Bob",
    lastName: "Pants",
    age: 19,
    isEmployed: true,
    sayHello: function() {
        console.log(`Hi, I am ${this.firstName}`);
    }
};

person.sayHello(); 
