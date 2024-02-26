const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addNumber(){
    const middle = Math.floor(array.length / 2);
    array.splice(middle, 1,0,0,0);
    return array;
}
console.log(addNumber(array));