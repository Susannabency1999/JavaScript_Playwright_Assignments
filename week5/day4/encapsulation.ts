class order{
    productName : string;
    orderId : string;
    price : number;

    constructor(Name: string, ID: string, Cost: number){
        this.productName = Name;
        this.orderId = ID;
        this.price = Cost;
        console.log(`Order created successfully for ${Name}`);

    }

    placeOrder(){
        console.log(`Order placed for ${this.productName} with order id ${this.orderId}`);
    }
    cancelOrder(){
        console.log(`Order cancelled for ${this.productName}`);
    }
    
}
const order1 = new order("iPhone 16","ORD123",85000);
order1.placeOrder();
order1.cancelOrder();