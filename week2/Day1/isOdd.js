// Write a function that prints all odd numbers from 1 to 25

function printOddNumbers(){
    for (i=1;i<=25;i++){
        if (i % 2 !== 0) {
            console.log(i, " is a odd number");
        }
    }
}
printOddNumbers()