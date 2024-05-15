function calculateGrade(scores) {
    const averageScore = calculateAverage(scores);
    if (averageScore >= 90 && averageScore <= 100) {
        return 'A';
    } else if (averageScore >= 80 && averageScore <= 89) {
        return 'B';
    } else if (averageScore >= 70 && averageScore <= 79) {
        return 'C';
    } else if (averageScore >= 60 && averageScore <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

function calculateAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}

console.log(calculateGrade([80, 95, 90, 70, 100]));
