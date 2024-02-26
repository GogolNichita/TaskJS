function Task7a(age) {
    return !(age >= 14 && age <= 90);
}

const age1 = 10;
if (Task7a(age1)) {
    console.log("Age outside the range of 14 to 90");
} else {
    console.log("Age ranges from 14 to 90");
}

// ============================================================

function Task7b(age) {
    return age < 14 || age > 90;
}

let age2 = 100;
if (Task7b(age2)) {
    console.log("Age outside the range of 14 to 90");
} else {
    console.log("Age ranges from 14 to 90");
}