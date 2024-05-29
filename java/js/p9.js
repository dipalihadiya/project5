function printOutput(x) {
    let output = '';
    let flag = false;
    
    for (let i = 0; i < x.length; i++) {
        if (x[i] === ' ') {
            output += ' ';
            continue;
        }

        if (flag) {
            output += x[i].toUpperCase();
            flag = false;
        } else {
            output += x[i].toLowerCase();
            flag = true;
        }
    }

    console.log(output);
    console.log(output.toUpperCase());
}
let x1 = "airplane";
let x2 = "oxoxoxox";
let x3 = "A New Book Java ";

console.log("Output for 'airplane':");
printOutput(x1);
console.log("\nOutput for 'oxoxoxox':");
printOutput(x2);
console.log("\nOutput for 'A New  Book Java':");
printOutput(x3);
