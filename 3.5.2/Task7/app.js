const person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
    phone: `112`,
        email: 'email@domain.com'
},
    address: `Moldova`,

    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    },
    getSalary: function(){
        return this.salary;
    },
    getContacts: function(){
        return this.contacts;
    },

    getAddress: function(){
        return this.address;
    },
}
console.log(person.name);
console.log(person.age);
console.log(person.salary);
console.log(person.contacts);
console.log(person.address);


