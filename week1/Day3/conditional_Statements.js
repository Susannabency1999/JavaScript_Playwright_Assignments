function launchBrowser(){
    browserName="chrome";
    if (browserName=="safari") {           
        console.log("launching safari browser");
    }
    else if (browserName=="firefox") {
        console.log("launching firefox browser");
    }   
    
    else if (browserName=="chrome") {
        console.log("launching chrome browser");
    }
    else{
        console.log("browser not supported");
    }

}
launchBrowser()

function runTests() {
    testType="smoke";
    switch (testType){
        case "Sanity":
            console.log("Run Sanity tests");
            break;
        case "regression":
            console.log("Run regression tests");
            break;
        case "smoke":
            console.log("Run smoke tests");
            break;
        default:
            console.log("Test type not supported");  
    }
 }
 runTests()