function oddAndEvenSum(num) {
    let numToString = num.toString();
    function evenSum() {
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 === 0) {
                sum += currentNum;
            }
        }
        return sum;
    }
    function oddSum() {
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 !== 0) {
                sum += currentNum;
            }
        }
        return sum;
    }

    console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`);
}

oddAndEvenSum(1000435)
