function displayName({ first, last, company }) {
    console.log(`Name: ${first} ${last}, Company: ${company}`);
}

const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
};

displayName(person);
