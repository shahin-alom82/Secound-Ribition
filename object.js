// var mobile = {
//     name: 'Tecno',
//     price: 12000,
//     color: 'Red',
// }
// var computer = {
//     name : 'Lenevo',
//     price : '13000',
//     color : 'Solver'
// }

// var student = {
//     name : 'Shahin Alom',
//     price : 330000,
//     color : 'white'
// }

var mobile = {
    name: 1,
    price: 2,
    color: 5,
}

var computer = {
    name: 9,
    price: 7,
    color: 12
}

var student = {
    name: 6,
    price: 8,
    color: 98
}

// console.log(student.name)
const keys = Object.keys(student)
console.log(keys)

const values = Object.values(student)
console.log(values);

for (var i = 0; i < keys.length; i++) {
    console.log(keys[i])
}