"use strict";
const testExecutionSummary = {
    suiteName: "Regression Tests",
    totalTests: 45,
    passedTests: 39,
    failedTests: 6,
    executionTime: "200 min"
};
console.log("Suite Name:", testExecutionSummary.suiteName);
console.log("Total Tests:", testExecutionSummary.totalTests);
console.log("Passed Tests:", testExecutionSummary.passedTests);
console.log("Failed Tests:", testExecutionSummary.failedTests);
console.log("Execution Time:", testExecutionSummary.executionTime);
let percentage = (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * (100);
console.log("The pass percentage for test execution is: ", percentage.toFixed(2) + "%");
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Successful");
}
else {
    console.log("Execution Completed with Failures");
}
