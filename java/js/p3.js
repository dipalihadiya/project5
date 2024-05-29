function findNumber(arr) {
    if (arr.length === 0) {
        return ;
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max: max, min: min };
}

const numbers = [5, 10, 3, 8, 1];
const result = findNumber(numbers);
console.log("Maximum value:", result.max);
console.log("Minimum value:", result.min);
