// Create a class to demonstrate access modifiers

class loginTest{
    
    public browserName = "Chrome";
    private password = "admin123";
    protected userName = "tester";

    public openApplication() {
        console.log(`${this.browserName} is launched successfully!!!`)
        
    }
    
    public login() {
        console.log(`This is the Password: ${this.password}`);
        console.log(`This is the UserName: ${this.userName}`);
        console.log("Login successful!!!")
    }
}
// Create an object for loginTest
const testLogin = new loginTest();

// Call the public methods
testLogin.openApplication();
testLogin.login();

//testLogin.password;  //Cannot access private property outside the class
//testLogin.userName;  //Cannot access protected property outside the class