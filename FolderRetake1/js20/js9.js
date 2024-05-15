let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };

if (peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() ||
    peopleObj1.name.toLowerCase() === peopleObj3.name.toLowerCase() ||
    peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()) {
    console.log("These two objects have the same name.");
}
