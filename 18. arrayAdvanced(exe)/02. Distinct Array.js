function distinctArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNum === arr[j]){
                arr.splice(j, 1);
                j = j - 1;
            }
        }
    }

    console.log(arr.join(' '));
}
distinctArray([7, 2, 8, 2, 2, 1])