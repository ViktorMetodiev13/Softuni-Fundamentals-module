function sorting(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let result = [];

    while(arr.length > 0) {
        let currBiggestNum = sortedArr.shift();
        let currSmallestNum = sortedArr.pop();
        result.push(currBiggestNum);
        result.push(currSmallestNum);
    }

    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);