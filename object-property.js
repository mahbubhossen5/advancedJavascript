const newArray = [];
const students = [
        { id: 11, Name: 'Suche', roll: 65 },
        { id: 23, Name: 'Mahbub', roll: 44 },
        { id: 22, Name: 'Tania', roll: 12 },
        { id: 247, Name: 'Mithu', roll: 54 },
        { id: 25, Name: 'Titu', roll: 22 },
        { id: 20, Name: 'Aftab', roll: 45 },

    ]
    // for (i = 0; i < students.length; i++) {
    //     const item = students[i];
    //     // console.log(item);
    //     newArray.push(item);
    //     newArray.pop(item);
    //     // return item;
    // }
    // // newArray.push(item);
    // console.log(newArray);

const specialItem = students.map(s => s.Name);
const rollNumber = students.map(s => s.roll);
const idNumber = students.map(s => s.id);

const filteredId = students.filter(x => x.id > 20);
const foundId = students.find(x => x.id > 23);
console.log(foundId);
// console.log(filteredId);
// console.log(idNumber);
// console.log(rollNumber);
// console.log(specialItem);
// newArray.push(rollNumber);
// console.log(newArray);
// console.log(specialItem);
// const specialItem = students.Name;
// console.log(specialItem);
// const lastArray = newArray.push(item);
// console.log(lastArray);