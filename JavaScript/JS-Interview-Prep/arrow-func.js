// Anonymous Function
const sayHello = function() {
    return 'Hello';
}

const sayHello = name => {
    return `Hello, ${name}`
}

// Callback function
setTimeout(function(){
    return 'Hello';
}, 1000)

// Named Functions
function sayHello() {
    return {};
}

const sayHello = () => {
     return {}
}

function Person(n) {
    this.name = n;
}


// Object Methods
const me = {
    sayHello: function() {}
}

