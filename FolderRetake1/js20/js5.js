let mixedArray = [42, "hello", {name: "Joe", surname: "Doe"}, true, 56, false, {name: "John", surname: "Smith"}, {name: "Joy", surname: "Stein"}];

for (let element of mixedArray) {
    if (typeof element === 'object' && !Array.isArray(element)) {
        console.log(element);
    }
}
