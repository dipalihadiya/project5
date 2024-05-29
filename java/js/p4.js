function ASCII(arr) {
    const asciiArray = [];

    for (let i = 0; i < arr.length; i++) {
        const Value = arr[i].charCodeAt(0);
        asciiArray.push(Value);
    }

    return asciiArray;
}

const myArray = ["a", "b", "c", "d"];
const Values = ASCII(myArray);
console.log("ASCII values:", Values);
