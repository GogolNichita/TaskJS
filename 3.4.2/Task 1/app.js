const array = [1,2,3,5,6,7,8,9,123,23];
let i = 0;
console.log('---------------------------------');
console.log('FOR');
for( i ; i < array.length; i++){
    console.log(array[i]);
}

console.log('---------------------------------');
console.log('WHILE');
while(i < array.length){
    console.log(array[i]);
    i++;
}

console.log('---------------------------------');
console.log('DO....WHILE');
do{
    console.log(array);
    i++;
}while(i < array.length)

console.log('---------------------------------');
console.log('FOR IN');
for(i in array){
    console.log(array[i]);
}

console.log('---------------------------------');
console.log('FOR OF');
for(i of array){
    console.log(i);
}

console.log('---------------------------------');
console.log('FOR_EACH');
array.forEach((element) => console.log(element));
console.log('---------------------------------');
console.log('MAP');
array.map(item => console.log(item));