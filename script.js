class Product {
    constructor(name,price,quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }


    //Method to calculate the total value
    getTotalValue() {
        return this.price*this.quantity;
    }


    //Method to display product details

    toString() {
        console.log('Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity} ');
    }
}