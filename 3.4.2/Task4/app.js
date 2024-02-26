function sumInputNumbers(){
    const numbers = [];
    while (true){
        let inputNumber = prompt('Introduce the number', '');
        if (inputNumber === '' || inputNumber === null || !isFinite(inputNumber)){
            break;
        }
        numbers.push(+inputNumber);
    }
    let sum = 0;
    for(let i of numbers){
        sum += i;
    }
    return sum;
}
console.log(sumInputNumbers());