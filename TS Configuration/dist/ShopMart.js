"use strict";
const printProduct = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
let mobileproduct = {
    name: "Samsung Galaxy A53",
    price: 550
};
printProduct(mobileproduct);
