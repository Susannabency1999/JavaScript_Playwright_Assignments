//function to compute the nth Fibonacci number using loop

function fibonacci(n:number):number{
    console.log("The value of n is: ", n)
    if (n < 0 || !Number.isInteger(n)) {                        //ensuring that the value of n is not a negative                       
        console.log("n must be a non-negative integer");        //integer or datatype other than Number
        return 0;
    }

    let num1 = 0;
    let num2 = 1;
    for (let i=0;i<n;i++){
        let num3=num1+num2;
        num1=num2;   //re-assigning values
        num2=num3;

    }
    return num1;
    
}
console.log(`The nth fibonacci value is: ${fibonacci(-4)}`);

// Output for different integers
// PS E:\Bency\Javascript\week4\day2> tsc .\fibonacciHomeAssignment.ts 
// PS E:\Bency\Javascript\week4\day2> node .\fibonacciHomeAssignment.js
// The value of n is:  7
// The nth fibonacci value is: 13
// PS E:\Bency\Javascript\week4\day2> tsc .\fibonacciHomeAssignment.ts 
// PS E:\Bency\Javascript\week4\day2> node .\fibonacciHomeAssignment.js
// The value of n is:  4
// The nth fibonacci value is: 3
// PS E:\Bency\Javascript\week4\day2> tsc .\fibonacciHomeAssignment.ts 
// PS E:\Bency\Javascript\week4\day2> node .\fibonacciHomeAssignment.js
// The value of n is:  -4
// n must be a non-negative integer
// The nth fibonacci value is: 0
