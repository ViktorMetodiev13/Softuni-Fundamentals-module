function PrintAndSum(firstNum, lastNum) {
    let result = 0;
    let outputNumOrder = "";

    for (let i = firstNum; i <= lastNum; i++) {
        result += i;
        outputNumOrder += `${i} `;
    }

    console.log(outputNumOrder);
    console.log(`Sum: ${result}`);
}

PrintAndSum(5, 10)