"use strict";
function fibonacci(n) {
    console.log("The value of n is: ", n);
    if (n < 0 || !Number.isInteger(n)) {
        console.log("n must be a non-negative integer");
        return 0;
    }
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i < n; i++) {
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num1;
}
console.log(`The nth fibonacci value is: ${fibonacci(-4)}`);
