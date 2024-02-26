function ucFirst(word) {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
}

const word = prompt("Enter the word ");
console.log(ucFirst(word));
alert(ucFirst(word));