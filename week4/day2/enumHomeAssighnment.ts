//TypeScript program that defines an enum for different application environments
//and a function to simulate running tests on these environments.

enum Environment{                           //enum for different application environments
    Local = "LOCAL",
    Development = "DEVELOPMENT",
    Staging = "STAGING",
    Production = 67
}

function runTests(stage: Environment):void{         //function to simulate tests in different environment
    console.log("The current stage is: ", stage);
}

runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);
