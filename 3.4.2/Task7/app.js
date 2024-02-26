const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function extract(start, end){
    return array.slice(start, end + 1);
}
console.log(array);
console.log(extract(2, 4));