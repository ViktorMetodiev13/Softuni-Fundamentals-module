function SumDigits(num) {
    let sumAsString = num.toString();
    let sum = 0;
    for (let digit of sumAsString) {
        sum += Number(digit);
    }
    console.log(sum);
}
SumDigits(123)