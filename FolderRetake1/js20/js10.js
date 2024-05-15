let people = [
    { name: "John", surname: "Doe" },
    { name: "olivia", surname: "Smith" },
    { name: "john", surname: "Johnson" },
    { name: "Sarah", surname: "Wilson" },
    { name: "David", surname: "Brown" },
    { name: "Emily", surname: "Davis" },
    { name: "David", surname: "Miller" },
    { name: "Olivia", surname: "Taylor" },
    { name: "david", surname: "Anderson" },
    { name: "Sophia", surname: "Clark" }
];

let names = {};
for (let person of people) {
    let lowercaseName = person.name.toLowerCase();
    if (!names[lowercaseName]) {
        names[lowercaseName] = true;
    }
}
let duplicates = Object.keys(names).filter(name => Object.values(names).filter(Boolean).length > 1);

console.log(duplicates);
