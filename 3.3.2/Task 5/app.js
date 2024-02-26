function NoCurrency(price) {
    return +price.slice(1);
}

const price = prompt("Enter the price ");
console.log("Price/Number without first character: " + NoCurrency(price));
alert(NoCurrency(price));