function SumEvenNumbers (a, b){
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

const a = parseInt(prompt("Enter first digit: "));
const b = parseInt(prompt("Enter last digit: "));
console.log(SumEvenNumbers(a, b));