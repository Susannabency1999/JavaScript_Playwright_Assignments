//function to compute the factorial of a given non-negative integer using a loop

function factorial(n:number){
    console.log("When value of n is: ", n);
    let count=1;
    if (n>0){
        for (let i=n;i>0;i--){          // Multiply n by every number down to 1
            count=count*i;
        }
        return `Factorial of n is ${count}`;
    }
    else{
        return("Negative Integer are not valid");
    }
}

console.log(factorial(7));
