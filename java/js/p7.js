const num = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
const ascendgOrder = num.slice().sort((a, b) => a - b);
console.log("ascending order:", ascendgOrder);
const descendgOrder = num.slice().sort((a, b) => b - a);
console.log("descending order:", descendgOrder);


const myColor = ["Red", "Green", "White", "Black"];
const ascending = myColor.slice().sort();
console.log("ascending order:", ascending);
const descending = myColor.slice().sort().reverse();
console.log("descending order:", descending);


