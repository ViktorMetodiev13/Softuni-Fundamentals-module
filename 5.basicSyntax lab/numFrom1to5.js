function numFrom1to5(num) {
    let sum = 0;
    let finalNum = num * 2;
    for (let i = 1; i <= finalNum; i+=2) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}
numFrom1to5(3)