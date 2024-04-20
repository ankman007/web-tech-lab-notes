// Async/Await 

// Async = makes the function return a promise
// Await = makes an async function wait for a promise

// Allows us to write asynchronous code in a synchronous manner
// Aysnc doesn't have resolve or reject parameters
// Everything after the Await is placed in an event queue

function walkingTheDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const dogWalked = true;
            if(dogWalked)
                resolve('Dog walking is done.');
            else
                reject('Dog is not walking.')
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const kitchenCleaned = true;
            if (kitchenCleaned)
                resolve("Kitchen is cleaned");
            else 
                reject("Kitchen dirty");
        }, 2500);
    })
    
}

function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashOut = false;
            if (trashOut)
                resolve('Trash is out');
            else
                reject('Trash is still inside');
        }, 500);
    })
    
}

async function doTasks(){
    try{
        const walkDogResult = await walkingTheDog();
        console.log(walkDogResult);

        const cleanKitchenRes = await cleanKitchen();
        console.log(cleanKitchenRes);

        const takeOutTrashRes = await takeOutTrash();
        console.log(takeOutTrashRes);

        console.log('All tasks are done.');
    }
    catch(error){
        console.log(`Encountered an error. Error: ${error}`)
    }
}

doTasks();