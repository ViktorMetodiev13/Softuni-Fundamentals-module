function reverseInPlace(arr1) {
    let temp1 = "";
    let temp2 = "";

    for (let i = 0; i < arr1.length / 2; i++) {
        temp1 += arr1[arr1.length - 1 - i] + " ";
    }
    if (arr1.length % 2 !== 0) {
        for (let i = ((arr1.length - 1) / 2) - 1; i >= 0; i--) {
            temp2 += arr1[i] + " ";
        }
    } else {
        for (let i = (arr1.length / 2) - 1; i >= 0; i--) {
            temp2 += arr1[i] + " ";
        }
    }

    console.log(temp1 + temp2);
}
reverseInPlace(['33', '123', '0', 'dd']);