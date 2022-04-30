function reverseArray(n, input) {
    let reversedArray = "";

    for (let i = n; i > 0; i--) {
        reversedArray += input[i - 1] + " ";
    }

    console.log(reversedArray);
}
reverseArray(3, [10, 20, 30, 40, 50])