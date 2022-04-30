function equalArrays(arr1, arr2) {
    let currentIndex = 0;
    let sum = 0;
    let isIdentical = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            currentIndex = i;
            isIdentical = false;
            break;
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);
    }

    if (isIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
    }
}
equalArrays(['10','20','30'], ['10','20','30']);