const numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
function removeNegatives(arr) {
    return arr.filter(number => number >= 0);
}
const positiveNum = removeNegatives(numbers);
console.log(" negative values:", positiveNum);
