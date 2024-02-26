function checkNumber(n) {
    if (!isNaN(n)) {
        if (n > 0) {
            return 1;
        } else if (n < 0) {
            return -1;
        } else {
            return 0;
        }
    } else {
        return "Error: No digit was introduced";
    }
}

const n = prompt("Introduce digit:");
alert(checkNumber(parseFloat(n)));