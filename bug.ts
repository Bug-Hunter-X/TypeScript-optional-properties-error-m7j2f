function printName(person: { name: string; age?: number }) {
  console.log(person.name);
}

printName({ name: "John" }); // Works fine
printName({}); // Error: Property 'name' is missing in type '{}'