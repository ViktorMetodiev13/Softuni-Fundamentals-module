function minerTask(input) {
    let result = {};

    for (let i = 0; i < input.length - 1; i+=2) {
        let ore = input[i];
        let oreQuantity = Number(input[i + 1]);
        if (result.hasOwnProperty(ore) == false) {
            result[ore] = Number(oreQuantity);
        } else {
            result[ore] += Number(oreQuantity);
        }
    }

    for (let key in result) {
        console.log(key, '->', result[key]);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])