const person1 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
};

const person2 = {
    name: 'Person',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
};

function intersection(person1, person2){
    const result = [];
    for (let i in person1){
        if(person2.hasOwnProperty(i) && person1[i] === person2[i]){
            result[i] = person1[i];
        }
    }
    return result;
}
console.log(intersection(person1, person2));