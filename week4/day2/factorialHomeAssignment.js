"use strict";
function factorial(n) {
    console.log("When value of n is: ", n);
    let count = 1;
    if (n > 0) {
        for (let i = n; i > 0; i--) {
            count = count * i;
        }
        return `Factorial of n is ${Number(count)}`;
    }
    else {
        return ("Negative Integer are not valid");
    }
}
console.log(factorial(7));
