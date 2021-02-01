// const numbers = [3, 5, 6, 7, 4, 78, 65];
// const squareOutput = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     squareOutput.push(result);
// }
// console.log(squareOutput);

// const numbers = [3, 5, 6, 7, 4, 78, 65];

// function square(element) {
//     return element * element;
// }



// numbers.map(function(element, index, array) {
//         // console.log(element, index, array);
//     })
// we can get every element, index, or the full array using map
// const result = numbers.map(function(element) {
//     return element * element;
// })
// console.log(result);

// const square = element => element * element;
// const square = x => x * x;

// const numbers = [3, 5, 6, 7, 4, 78, 65];
// const result = numbers.map(x => x * x);
// console.log(result);



// FILTER
const numbers = [2, 54, 5, 7, 6, 8, 9, 15, 2, 35, 2]
const biggerOutput = numbers.filter(x => x * x > 25);
// console.log(biggerOutput);

const smallerOutput = numbers.filter(x => x / x - 1 < 1);
// console.log(smallerOutput);

const searchedOutput = numbers.find(x => x > 35);
console.log(searchedOutput);