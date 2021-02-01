// const first = 2;
// const second = 3;
// if (first == second) {
//     console.log('condition is true')

// } else {
//     console.log('condition is false');
// }
// // else will be the result

// const first = 2;
// const second = 2;
// if (first == second) {
//     console.log('condition is true')

// } else {
//     console.log('condition is false');
// }
// // condition is true

// const first = 2;
// const second = '2';
// if (first == second) {
//     console.log('condition is true')

// } else {
//     console.log('condition is false');

// condition is true will be the result;

// const first = 2;
// const second = '2';
// if (first === second) {
//     console.log('condition is true')

// } else {
//     console.log('condition is false');
// }
// now the result will be false because of tripple equal;


// double equal checks only value
// tripple equal will check both value and type
// {if we use double equal it will        not check         whether it is string or number}
// {but if we use tripple equal it will       check         whether it is string or number}



// in javascript true is taken as 1; and false is taken as 0;
// const number = 1;
// const number2 = true;
// if (number == number2) {
//     console.log('the number is true');
// } else {
//     console.log('the number is false');
// }
// this will show the output true because true is taken as 1;

// const number1 = 0;
// const number2 = true;
// if (number1 == number2) {
//     console.log('the number is true');
// } else {
//     console.log('the number is false');
// }
// this will show the output false

// const number3 = 0;
// const number4 = false;
// if (number3 == number4) {
//     console.log('the number is true');
// } else {
//     console.log('the number is false');
// }
// this will show the output true because false is taken as 0;

const number3 = 0;
const number4 = false;
if (number3 === number4) {
    console.log('the number is true');
} else {
    console.log('the number is false');
}
// though it was supposed to be true while using ==;
// as we are using ===, it checks the typeof.So the ultimate outcome will be false because of tripple equal;