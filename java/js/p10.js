function reverse(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);
console.log("Reversed Array:", reverse(arr));
