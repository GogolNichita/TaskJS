const array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];

function filter(array) {
    return array.filter(item => typeof item === 'number' && !isNaN(item));
}
console.log(array);
console.log(filter(array));
