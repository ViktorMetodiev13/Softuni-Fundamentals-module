function threeNumsMultiply(num1, num2, num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        console.log("Positive");
    } else if ((num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num3 < 0 && num2 > 0) || (num2 < 0 && num3 < 0 && num1 > 0)) {
        console.log(`Positive`);
    } else {
        console.log("Negative");
    }
}
threeNumsMultiply(5,
    12,
    -15
)