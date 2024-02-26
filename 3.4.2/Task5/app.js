function convert(fn, array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(fn(array[i]));
    }
    return newArray;
}

function square(x){return x * x; }
console.log(convert(square, [1,2,3,4]));
console.log(convert(square, []));

const arr = [1,2,3];
console.log(convert(square, arr));
console.log(arr);
