// Write a program that prints the numbers from 1 to n. For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(num){
    for (let i=1; i<=num; i++){

        let ans = '';
        
        if (i % 3 === 0) 
            ans += 'Fizz';
        if (i % 5 === 0)
            ans += 'Buzz';

        console.log(ans || i);
    }
}

fizzBuzz(25);
