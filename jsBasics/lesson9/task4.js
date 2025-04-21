import chalk from "chalk";

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}

person.email = "JohnDoe@test.com";
delete person.age;

console.log(person);