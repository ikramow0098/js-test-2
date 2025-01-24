let products = ["Apple", "Banana", "Kiwi", "Apricot", "Pineapple"];
products.push("Watermelon");
products.pop();
console.log(products);

let scores = [88, 95, 76, 87, 92];
scores[1] = 65;
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
const average = total / scores.length;

console.log(scores)
console.log("Average score:", average);

let employee = {
    name: "John",
    age: 24,
    department: "IT",
    isActive: true,
}
employee.department = "Finance";
Object.defineProperty(employee, "position", { value: "Security analyst" })
console.log(employee)

let customers = [
    {
        name: "John",
        email: "john@email.com",
        purchaseAmount: 560,
    },
    {
        name: "Anne",
        email: "anne@email.com",
        purchaseAmount: 64,
    },
    {
        name: "Daniel",
        email: "daniel@email.com",
        purchaseAmount: 12,
    },
];
customers.push(
    {
        name: "Nathan",
        email: "nathan@email.com",
        purchaseAmount: 241,
    },
)
console.log(customers)

let order = {
    orderId: 1,
    customerName: "John",
    amount: 123,
    calculateTax: function () {
        return this.amount * 0.10; // 10% tax rate
    }
}
console.log(order);
console.log(order.calculateTax());
