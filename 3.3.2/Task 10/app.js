let num = prompt("Input the number");
const divider = (number) => {
    let numbers = [];
    numbers.push(number, -number);
    for(let i = 1; i <= number / 2; i++){
        if (number % 1 === 0){
            numbers.push(i, -i);
        }
    }
    return numbers.sort((a, b) => {
        if (a > b){
            return 1;
        } else if (a < b){
            return -1;
        } else {
            return 0;
        }
    });
}

num = Number(num);

if (num) {
    console.log(divider(num));
}else {
    console.log("You haven`t typed a number")
}