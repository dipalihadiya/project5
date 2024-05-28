// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using a for loop to calculate the sum
let sumForLoop = 0;
for (let i = 0; i < numbers.length; i++) {
    sumForLoop += numbers[i];
}

console.log("Sum using for loop:", sumForLoop);

// Using a forEach loop to calculate the sum
let sumForEachLoop = 0;
numbers.forEach(function(number) {
    sumForEachLoop += number;
});

console.log("Sum using forEach loop:", sumForEachLoop);
