function amazingNumber(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let currentSymbol = Number(num[i]);
        sum += currentSymbol;
    }

    sum = sum.toString();

    let result = sum.includes('9');
    console.log(result? `${num} Amazing? True`: `${num} Amazing? False`);
}
amazingNumber(1233)