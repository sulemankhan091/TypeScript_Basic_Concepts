interface Product {
    name: string;
    price: number;
    quantity?: number;
}

const printProduct = (product: Product): void => { 
    console.log(`${product.name} - $${product.price}`);   
}

let mobileproduct:Product = {
    name: "Samsung Galaxy A53",
    price: 550
}

printProduct(mobileproduct);