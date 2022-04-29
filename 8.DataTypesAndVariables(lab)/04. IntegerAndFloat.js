function integerAndFloat(a, b, c) {
    let sum = a + b + c;

    toString(sum);

    let isInteger = true;

    for (let i = 0; i <= sum.length; i++) {
        let currentSymbol = sum[i];
        if (currentSymbol === ".") {
            console.log(`${sum} - Float`);
            break;
        } 
    }

    /*
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
    */
}
integerAndFloat(1, 2, 3.16);