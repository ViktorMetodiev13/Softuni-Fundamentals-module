function storage(input) {
    let result = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (!result.has(product)) {
            result.set(product, quantity);
        } else {
            let existing = quantity + Number(result.get(product));
            result.set(product, existing);
        }
    }

    for (let product of result) {
        console.log(product[0], '->', product[1]);
    }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])
