function asciiSumator(input) {
    let totalSum = 0;

    let firstChar = input[0];
    let secondChar = input[1];
    let str = input[2];

    firstChar = firstChar.charCodeAt(0);
    secondChar = secondChar.charCodeAt(0);

    for (let i = 0; i < str.length; i++) {
        let currCharCode = str.charCodeAt(i);
        if (firstChar > secondChar) {
            if (currCharCode > secondChar && currCharCode < firstChar) {
                totalSum += currCharCode;
            }
        } else {
            if (currCharCode > firstChar && currCharCode < secondChar) {
                totalSum += currCharCode;
            }
        }
    }

    console.log(totalSum);
}

asciiSumator(['.',
'@',
'dsg12gr5653feee5'])