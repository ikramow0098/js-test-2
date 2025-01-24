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
    name:"John",
    age:24,
    department:"IT",
    isActive:true,
}
employee.department = "Finance";
Object.defineProperty(employee, "position", {value:"Security analyst"})
console.log(employee)