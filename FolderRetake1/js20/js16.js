function multiplicationTable(number) {
    const table = [];
    for (let i = 1; i <= 12; i++) {
        const result = number * i;
        table.push(`${number} x ${i} = ${result}`);
    }
    return table;
}

console.log(multiplicationTable(2));
