//implement the concept of Overloading by creating a class and implementing
//methods with different sets of input arguments
class APIClient{
    sendRequest(endpoint : string):void;
    sendRequest(endpoint: string, requestBody: string, 
        requestStatus : boolean):void;

    sendRequest(endpoint: string, requestBody?: string, requestStatus? : boolean){
        console.log("Endpoint:", endpoint);

        if (requestBody !== undefined) {
            console.log("Request Body:", requestBody);
        }

        if (requestStatus !== undefined) {
            console.log("Request Status:", requestStatus);
        }
    }
}
    
const client = new APIClient();
client.sendRequest("user");
client.sendRequest("user", "bency", true);