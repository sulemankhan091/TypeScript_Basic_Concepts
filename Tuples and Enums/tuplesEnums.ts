// tuples are fixed in their types and length in typescript
let myTuple : [number,string];
myTuple = [90,'Ninety'] // is okay
//myTuple = ['Ninety',90] // is not okay because of type order 

let rgbColor:[number , number , number];

rgbColor = [92,255,0]; // rgbColor can have three numbers not less than three and not more than three

////////////////////////////////

// tuple with type alias 
type HTTPResponse = [number,string];

let goodResponse: HTTPResponse = [200,'OK'];
// goodResponse[0] = 900; //is ok
// goodResponse.pop();  // is also ok
// goodResponse.push('404 not found'); //is also ok
// console.log(goodResponse);

// Array of type Tuple
const responses: HTTPResponse[] = [[200,'ok'],[404,'404 not found']];

//sometimes using objects instead of tuples can be more usefull
//example
type HttpRes = {
    code: number;
    msg: string;
}
let httpNotFound:HttpRes = {
    code:404,
    msg: '404 Not Found'
}

/* Enums ^Start^*/

// Enums allowed us to define set of named constants we can give type number of string to these Enums

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVIERD,
    RETURNED
}

function isDeliverd(status:OrderStatus){
    return status = OrderStatus.DELIVIERD;
}

// console.log(isDeliverd(OrderStatus.PENDING)); //2
// console.log(isDeliverd(OrderStatus.SHIPPED)); //2

//Enum of strings

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

// let direction = ArrowKeys.DOWN;
/* Enums ^End^*/