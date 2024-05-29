function checkValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
let arr = [1, 2, 3, 4, 5];
let valueToCheck = 3;

if (checkValue(arr, valueToCheck)) {
    console.log("The value", valueToCheck, "is found in the array.");
} else {
    console.log("The value", valueToCheck, "is not found in the array.");
}
