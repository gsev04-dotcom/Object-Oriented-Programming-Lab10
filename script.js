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

class perishableProduct extends Product {
    constructor(name,price,quantity,expirationDate) {
        super(name,price,quantity)
        this.expirationDate = expirationDate;


}

overridetoString() {
    console.log('Product:${this.name}, Price: ${this.price}, Quantity: ${this.quantity }, ExpirationDAte ${this.expirationDate}');
}



//static method to apply discount 
static applyDiscount(products,discount) {
    for (let eachProduct of products) {
        eachProduct.price = eachProduct.price-(eachProduct.price * .10);
    }
}
}


class Store {
    constructor() {
        this.inventory =[]; //Empty array to hold all products
    }

    
    //add a product to inventory
    addProduct(product) {
        this.product.push (product);
    }


//Method to return the total inventory value in store
getInventoryValue() {
    let totalInventory = 0;

    for(let eachProduct of this.inventory) {
        totalInventory = totalInventory + product.getInventoryValue();
    }


return totalInventory();
}



//Find a product by  the name

findProductby(name) {
    for(let eachProduct of this.inventory) {
        if (product.name == name) {
            return product;
        }
    }
        return null
}

}
