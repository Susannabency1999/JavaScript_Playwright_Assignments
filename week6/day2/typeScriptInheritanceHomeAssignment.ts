class Browser{
    browserName: string ;
    browserVersion : string;

    constructor (name: string, version: string){
        this.browserName = name;
        this.browserVersion = version;
    }
    
    openURL(){
        console.log(`You are launching the URL in ${this.browserName}, having version ${this.browserVersion}`)
    }
    closeBrowser(){
        console.log("Closing the Browser!!!")
    }
    navigateBack(){
        console.log("You are navigating back to desktop page")
    }
}

class chrome extends Browser{
    openIncognito(){
        console.log("Opening in Incognito mode")
    }
    override openURL(): void {
        console.log(`You are accessing the URL in ${this.browserName} with version ${this.browserVersion} `)
    }
    clearCache(){
        console.log("clearing the cache")
    }
    
}

class edge extends Browser{
    takeSnap(){
        console.log("You have taken a snap")
    }
    clearCookies(){
        console.log(`You have cleared all the cookies from ${this.browserName} with version ${this.browserVersion} `)
    }
    override navigateBack(): void {
        console.log("You are navigating to Edge home page")
    }
}

class safari extends Browser{
    readerMode(){
        console.log("You are now in reader mode")
    }
    fullScreenMode(){
        console.log(`You are now in full screen mode in ${this.browserName} browser with version ${this.browserVersion} `)

    }
    override closeBrowser(): void {
        console.log("Closing the Browser")

    }
}
const ChromeBrowser = new chrome("Chrome" , "1.21.45");
const EdgeBrowser = new edge("Edge", "2.45.67");
const SafariBrowser = new safari("Safari", "1.34.56");
ChromeBrowser.openIncognito();
ChromeBrowser.openURL();
ChromeBrowser.clearCache();

EdgeBrowser.takeSnap();
EdgeBrowser.navigateBack();
EdgeBrowser.clearCookies();

SafariBrowser.readerMode();
SafariBrowser.fullScreenMode();
SafariBrowser.closeBrowser();


