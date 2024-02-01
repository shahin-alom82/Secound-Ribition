// function add(num1, num2){
//     var addNumber = num1 + num2;
//     return addNumber;
// }
// var total = add(23, 55);
// console.log('total', total);

function average(assignment1, assignment2, assignment3){
    const averages = assignment1 + assignment2 + assignment3;
    const totalAverage = averages / 3;
    return totalAverage;
}
const total = average(23, 44, 66);
const totals = total.toFixed(2)
console.log('total', totals);