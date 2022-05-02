function negativeOrPositiveNum(arr) { 
    let result = [];

    for (let num of arr) {
        if (Number(num) < 0) {
            result.unshift(Number(num));
        } else {
            result.push(Number(num));
        }
    }

    console.log(result.join(`\n`));
}
negativeOrPositiveNum(['3', '-2', '0', '-1']);