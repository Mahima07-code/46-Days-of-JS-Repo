const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen"
};

const fullNameMember = person.fullName.bind(member);

console.log(fullNameMember()); 
