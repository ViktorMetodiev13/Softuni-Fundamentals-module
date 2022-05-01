function arrayRotation(arr, rotations) {
    for (let i  = 0; i < rotations; i++) {
        let currentShift = arr.shift();
        arr.push(currentShift);
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)