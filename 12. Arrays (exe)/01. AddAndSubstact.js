function AddAndSubstact(arr) {
    let modifiedArr = [];
    let originalArrSum = 0;
    let modifiedArrSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            modifiedArr.push(arr[i] + i);
        } else {
            modifiedArr.push(arr[i] - i);
        }
        originalArrSum += arr[i];
    }

    for (let i = 0; i < modifiedArr.length; i++) {
        modifiedArrSum += modifiedArr[i];
    }

    console.log(modifiedArr);
    console.log(originalArrSum);
    console.log(modifiedArrSum);
}
AddAndSubstact([5, 15, 23, 56, 35])