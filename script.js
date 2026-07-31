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


    //static method to apply discount 
static applyDiscount(products,discount) {
    for (let eachProduct of products) {
        eachProduct.price = eachProduct.price-(eachProduct.price * .10);
    }
}
}



class perishableProduct extends Product {
    constructor(name,price,quantity,expirationDate) {
        super(name,price,quantity)
        this.expirationDate = expirationDate;


}

overridetoString() {
    console.log('Product:${this.name}, Price: ${this.price}, Quantity: ${this.quantity }, ExpirationDAte ${this.expirationDate}');
}


}


class Store {
    constructor() {
        this.inventory =[]; //Empty array to hold all products
    }

    
    //add a product to inventory
    addProduct(product) {
        this.inventory.push(product);
    }


//Method to return the total inventory value in store
getInventoryValue() {
    let totalInventory = 0;

    for(let eachProduct of this.inventory) {
        totalInventory = totalInventory + eachProduct.getInventoryValue();
    }


return totalInventory;
}



//Find a product by  the name

findProductby(name) {
    for(let eachProduct of this.inventory) {
        if (eachProduct.name === name) {
            return product;
        }
    }
        return null;
}

}

//Creating products and perishable products

let product1 = new Product("Cereal", 2.50, 50);
let product2 = new Product("Water", 1.00, 10);
let product3 = new Product("Milk", 3.00, 15);
let product4 = new perishableProduct("Cheese", 5.00 , 8, "2026-01-08");
let product5 = new perishableProduct("Yogurt", 8.95, 4, "2026-12-31");


//add store and products 
let store = new Store();

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(product4);
store.addProduct(product5);


//Display inventory before and after discount
console.log("Total value before discount : $ " + store.getInventoryValue());
Product.applyDiscount(store.inventory , 0.15);

console.log("Total value after discount: $ " + store.getInventoryValue());


