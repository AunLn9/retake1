function convertTemperature(temperature, mode) {
    if (mode === 'FtoC') {
        return (temperature - 32) * 5/9;
    } else if (mode === 'CtoF') {
        return (temperature * 9/5) + 32;
    } else {
        return 'Invalid mode. Please use "FtoC" or "CtoF"';
    }
}

console.log(convertTemperature(68, 'FtoC'));
console.log(convertTemperature(20, 'CtoF'));
console.log(convertTemperature(100, 'Unknown'));
