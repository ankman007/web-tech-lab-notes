// synchronous 
// executes line by line consecutively in a sequential manner
// Code that waits for an operation to complete.

// asynchronous 
// Allows multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow & allows the program to continue
// (I/O operation, network request, fetching data)
// Handled with: Callbacks, Promises, Async/Await

function getData(callback){
    setTimeout(() =>{
        console.log('get data');
        callback();
    }, 500);
}

function executeTask(){
    console.log('task 1');
    console.log('task 2');
}

getData(executeTask);