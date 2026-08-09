// Write a function that prints all odd numbers from 1 to 25

function is_odd(){
    for (i=1;i<=25;i++){
        if (i % 2 !== 0) {
            console.log(i, "Number is odd");
        }
    }
}
is_odd()