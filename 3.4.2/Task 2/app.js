const array=[1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
console.log('--------------------------------');
function numbersLessThanFive(array) {
    return array.filter(num => num < 5);
}
console.log(numbersLessThanFive(array));

let min = Math.min(...array);
let max = Math.max(...array);

const minPositions = [];
const maxPositions = [];
console.log('--------------------------------');
array.forEach((num, index) => {
    if (num === min) minPositions.push(index);
    if (num === max) maxPositions.push(index);
});
console.log(minPositions);
console.log(maxPositions);
console.log('--------------------------------');
array.sort((a, b) => b - a);
console.log(array);
console.log('--------------------------------');
const average = array.reduce((acc, val) => acc + val, 0) / array.length;
const filteredArray = array.filter(num => num > average);
console.log('Numbers bigger than AVG:', filteredArray);