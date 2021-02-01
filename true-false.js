// 0 - falsy 
// '0' - truthy
// '' - falsy 
// ' ' - truthy
// null - falsy
// NaN - falsy
// undefined - falsy
// [] - TRUTHY
// {} - TRUTHY




// const age = 4
// if (age) {
//     console.log('condition is true');
// } else {
//     console.log('condition is false');
// }
// // javascript will take it as true.
// const age = -45;
// if (age) {
//     console.log('condition is true');
// } else {
//     console.log('condition is false');
// }
// javascript will also think it to be true.
// BUT if the value of the constant is defined 0, it will be treated as false.
const age = 0;
if (age) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}
// javascript will take it to be false.

const firstName1 = 'titu';
if (firstName1) {
    console.log('this is a name')
} else {
    console.log('this is not a name');
}
// }  --- javascript will take it to be true;
const firstName2 = '';
if (firstName2) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}
// javascript will take it to be false.
// But if there is a blank space , javascript will take it to be true.
const firstName3 = ' ';
if (firstName3) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

const firstName4 = '0';
if (firstName4) {
    console.log('condition is true')
} else {
    console.log('condition is false');
}

let Name = null;
if (Name) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}
//null - javascript will take it to be false.

let Name2 = NaN;
if (Name2) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}

let Name3 = [];
if (Name3) {
    console.log('condition is true');
} else {
    console.log('CONDITION IS FALSE');
}


let Name4 = {};
if (Name4) {
    console.log('condition is true');
} else {
    console.log('CONDITION IS FALSE');
}