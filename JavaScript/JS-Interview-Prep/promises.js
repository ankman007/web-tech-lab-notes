// Promise

// An object that manages asynchronous operations; quering a database, fecting a file, performing network operations 
// wrap a Promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. walk the dog
// 2. clean the kitchen
// 3. take out the trash


function walkingTheDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const dogWalked = false;
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

walkingTheDog()
    .then(value =>{
        console.log(value)
        return cleanKitchen();
    })
    .then(value =>{
        console.log(value);
        return takeOutTrash();
    })
    .then(value =>{
        console.log(value);
        console.log('All the tasks are done.')
    })
    .catch(error =>{
        console.log(error)
    })

// callback hell
// walkingTheDog(() =>{
//     cleanKitchen(() =>{
//         takeOutTrash(() =>{
//             console.log('all task has been completed');
//         });
//     });
// });


// const prom = new Promise((resolve, reject) =>{
//     resolve({user: "Blanka"});
// })

// prom.
//     then((data) =>{
//         return data;
//     })
//     .then((user) => {
//         console.log(user);
//     })
//     .catch(error => {
//         console.log(error);
//     });

