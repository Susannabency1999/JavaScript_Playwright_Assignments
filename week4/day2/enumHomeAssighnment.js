"use strict";
var Environment;
(function (Environment) {
    Environment["Local"] = "LOCAL";
    Environment["Development"] = "DEVELOPMENT";
    Environment["Staging"] = "STAGING";
    Environment[Environment["Production"] = 67] = "Production";
})(Environment || (Environment = {}));
function runTests(stage) {
    console.log("The current stage is: ", stage);
}
runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);
