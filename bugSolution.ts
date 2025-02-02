function printName(person: { name?: string; age?: number }) {
  console.log(person.name);
}

printName({ name: "John" }); // Works fine
console.log(printName({})); // prints undefined 