//Function Declaration

function userProfile(name){
    console.log("Hello "+ name);

}
userProfile("John")

//Arrow Function

const double = (num)=> num*num
console.log(double(5))

//Anonymous Function

setTimeout(function() {

  console.log('This message is delayed by 2 seconds.');

}, 2000);

// Callback Function

function getUserData(callback) {
  setTimeout(function () {
    const user = {
      name: "John",
      age: 25
    };

    callback(user);
  }, 3000);
}

getUserData(function (user) {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
});