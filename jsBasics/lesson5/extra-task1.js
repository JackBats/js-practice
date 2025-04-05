let array = [34.2, 12.5, 7.8, 45.6, 23.9];

let result = array.map(num => Math.round(num/5) * 5);

console.log("Rounded array: " + result);