function firstAndLastK(arr) {
    let kElement = arr.shift();

    let slice1 = arr.slice(0, kElement);
    let slice2 = arr.slice(-kElement);

    console.log(slice1.join(' '));
    console.log(slice2.join(' '));
}
firstAndLastK([2, 
    7, 8, 9]
    )