function MagicSum(arr, magicNum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1;j < arr.length; j++) {
            if (arr[i] + arr[j] === magicNum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
MagicSum([1, 7, 6, 2, 19, 23], 8)