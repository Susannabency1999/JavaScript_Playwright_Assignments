// 1.Create a TypeScript program to handle different payment methods using a Union Type.
// - Create a function that accepts only specific payment methods.
// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
// - Write a function makePayment that takes a parameter of type PaymentMethod and prints which payment
//   method is chosen.
// - Call the function with "UPI" and "CreditCard" as arguments.


type PaymentMethod ="UPI" | "CreditCard" | "PayPal";

function makePayment(chosenMethod:PaymentMethod){
    console.log("This payment was made using ",chosenMethod);

}

makePayment("UPI");
makePayment("CreditCard");