let person = {
    name: "John",
    age: 25,
    isStudent: true
};
person.hobbies = ["reading", "traveling", "painting"];
person.age = 30;
delete person.isStudent;

console.log(person);
