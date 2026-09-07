// Step 1: Create the base WebComponent class

class WebComponent{

    selector : string;

    constructor(selector:string){
        this.selector = selector;
    }
    click(){
        console.log(`Click on this button ${this.selector}`);
    }
    focus(){
        console.log(`${this.selector} is focused`);
    }
}
// Step 2: Create Button class and override click()
class Button extends WebComponent{
    click(){
        console.log(`Click action was performed on ${this.selector}`);
    }
}
// Step 3: Create TextInput class with value and enterText()
class TextInput extends WebComponent{
    value : string ="";

    enterText(text: string){
        this.value = text;    
        console.log(`The user entered text is: ${this.value}`)
    }
}
// Step 4: Test the components
function testComponents(): void{

const button = new Button("#loginButton"); 
const textInput = new TextInput("#username"); 
button.click();
button.focus(); 
textInput.focus();
textInput.enterText("Smith");
}
// Call the test function
testComponents();