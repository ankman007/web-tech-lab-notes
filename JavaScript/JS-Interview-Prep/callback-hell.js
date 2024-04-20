// Callback 
// it is situation in JS where callbacks are nested within other callbacks to the degree where the code is difficult to read. 
// old pattern to handle aynchronous functions
// use promises + async/await to avoid callback hell

function task1(callback){
    setTimeout(() =>{
      console.log('task 1 complete');
      callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() =>{
        console.log('task 2 complete');
        callback();
      }, 1000);
}

function task3(callback){
    setTimeout(() =>{
        console.log('task 3 complete');
        callback();
      }, 3000);
}

function task4(callback){
    setTimeout(() =>{
        console.log('task 4 complete');
        callback();
      }, 2000);
}

task1(() =>{
    task2(() =>{
        task3(() =>{
            task4(() => {
                console.log('all task complete');
            });
        });
    });
});

// function callbackHell(){
//     setTimeout(() => {
//         let data = {'user': 'ankit'};
//         console.log(data);
//         setTimeout(() =>{
//             console.log('Data has been updated');
//         }, 1000);
//     }, 200);
// }

// callbackHell();


