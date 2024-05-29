const arr = [2, 5, 6, 3, 8, 9];
function elements(arr) {
    return arr.map(number => number * number);
}
const squaredArray = elements(arr);
console.log("Squared array:", squaredArray);
