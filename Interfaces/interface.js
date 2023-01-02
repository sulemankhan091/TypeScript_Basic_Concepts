// interfaces almost serve the exact same purpose as type alias in typescript
function sayHappyBirthday(person) {
    return ("Hello ".concat(person.name, " happy birthday on turning ").concat(person.age));
}
var msg = sayHappyBirthday({ name: 'Muhammad Suleman', age: 28 });
var pt1 = {
    x: 60,
    y: 120
};
var bankEmployee = { id: 9799, firstName: "John", lastName: "Doe", nickName: "johnny" };
var hotelEmployee = { id: 4554, firstName: "Alex", lastName: "Monich", sayHi: function () { return 'Hi'; } }; // also ok
var shoes = {
    name: 'Black Nike Shoes',
    price: 90,
    calcDiscount: function (disc) {
        var newPrice = this.price * (1 - disc);
        this.price = newPrice;
        return this.price;
    }
};
var ans = shoes.calcDiscount(0.3);
console.log(ans);
