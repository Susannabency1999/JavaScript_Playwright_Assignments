//implement the concept of overriding by creating a generic class and a specific subclass

class BasePage{
    findElement(){
        console.log("Finding the Element")
    }
    clickElement(){
        console.log("Clicking on the Element")
    }
    enterText() {
        console.log("Entering the Text")
    }
    performCommonTasks(){
        console.log("Upload a file")
    }

}

class LoginPage extends BasePage{
    performCommonTasks(){
        console.log("Book an appoinment")
    }
}
const login= new LoginPage();
login.findElement();
login.clickElement();
login.enterText();
login.performCommonTasks();