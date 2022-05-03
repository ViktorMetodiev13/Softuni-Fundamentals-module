function bombSpecialNumber(array, bomb) {
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    let sum = 0;

    let indexOfBomb = array.indexOf(bombNumber);
    
    while (indexOfBomb !== -1) {
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;
        array.splice(startExplosionIndex, explosionLength)
        indexOfBomb = array.indexOf(bombNumber)
    }

    //let sum = arr.reduce((a, b) => a + b, 0);

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

}
bombSpecialNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])