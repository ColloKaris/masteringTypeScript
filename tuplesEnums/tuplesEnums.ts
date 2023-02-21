//creating a tuple - tuples have a fixed length, type and the order
//or elements matter
const color: [number, number, number ] = [255, 0, 255];

//we can have mixed type tuples and the order matters
type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];

//Enums
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED  
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.DELIVERED)

//enum of Strings
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

ArrowKeys.LEFT