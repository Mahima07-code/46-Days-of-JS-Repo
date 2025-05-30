const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "John",
  lastName: "Doe"
};

// Using call to invoke fullName with person1 as this
console.log(person.fullName.call(person1)); // Output: John Doe
