// tuples are fixed in their types and length in typescript
var myTuple;
myTuple = [90, 'Ninety']; // is okay
//myTuple = ['Ninety',90] // is not okay because of type order 
var rgbColor;
rgbColor = [92, 255, 0]; // rgbColor can have three numbers not less than three and not more than three
var goodResponse = [200, 'OK'];
// goodResponse[0] = 900; //is ok
// goodResponse.pop();  // is also ok
// goodResponse.push('404 not found'); //is also ok
// console.log(goodResponse);
// Array of type Tuple
var responses = [[200, 'ok'], [404, '404 not found']];
var httpNotFound = {
    code: 404,
    msg: '404 Not Found'
};
/* Enums ^Start^*/
// Enums allowed us to define set of named constants we can give type number of string to these Enums
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVIERD"] = 2] = "DELIVIERD";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
function isDeliverd(status) {
    return status = OrderStatus.DELIVIERD;
}
console.log(isDeliverd(OrderStatus.PENDING));
console.log(isDeliverd(OrderStatus.SHIPPED));
/* Enums ^End^*/ 
