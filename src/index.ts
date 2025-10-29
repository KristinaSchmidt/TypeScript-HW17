//1

function calculateTotal (price: number, quantity: number, discount:number =0 ): number {
    const total= price * quantity;
    const discounted= total - total * discount;
    return discounted;
}

console.log(calculateTotal(10,3));
console.log(calculateTotal(10,3, 0.1));





//2
// type ID= string | number;


// function displayId(id: ID): void {
//     if (typeof id === "string") {
//     console.log("ID - строка:", id.toUpperCase());
//   } else {
//     console.log("ID - число:", id * 10);
//   }
// }

// displayId("Kristina");
// displayId(35);




//3
// type Status= "pending" | "shipped" |  "delivered";

// interface Order {
//     orderId: string;
//     amount: number;
//     status: Status;
// }


// const orders: Order[] = [
//   { 
//     orderId: "1", 
//     amount: 11, 
//     status: "pending" 
//   },
//   { 
//     orderId: "2", 
//     amount: 7, 
//     status: "shipped" 
//   },
//   { 
//     orderId: "3", 
//     amount: 21, 
//     status: "delivered" 
//   },
//   { 
//     orderId: "4", 
//     amount: 18, 
//     status: "pending" 
//   },
// ];

// function filterOrdersByStatus (orders: Order[], status: Status): Order[] {
//   return orders.filter((order) => order.status === status);
// }

// console.log("Pending:", filterOrdersByStatus(orders, "pending"));

// console.log("Shipped:", filterOrdersByStatus(orders, "shipped"));
// console.log("Delivered:", filterOrdersByStatus(orders, "delivered"));






//4

// type ProductInfo = [string, number, number]; 


// type Inventory = {
//   [key: string]: number;
// };


// const inventory: Inventory = {
//   Laptop: 7,
//   Phone: 21,
// };


// const updateStock = (inventory: Inventory, productInfo: ProductInfo): Inventory => {
//   const [name, price, quantity] = productInfo;
//   if (inventory[name]) {
//     inventory[name] += quantity;
//   } else {
//     inventory[name] = quantity;
//   }
//   return inventory;
// };


// const productInfo: ProductInfo = ["Tablet", 500, 5];
// const updatedInventory = updateStock(inventory, productInfo);

// console.log(updatedInventory);