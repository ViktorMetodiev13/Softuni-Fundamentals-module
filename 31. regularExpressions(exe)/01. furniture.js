function furniture(input) {
    let regexp = />>(?<name>[A-Z][a-z]+)<<(?<price>\d+[\.]?\d+)!(?<quantity>\d+)/gi;
    let totalPrice = 0;
    let match = regexp.exec(input);
    let furnitures = [];

    while (match !== null) {
        let name = match.groups.name;
        let price = +match.groups.price;
        let quantity = +match.groups.quantity;

        furnitures.push(name);
        totalPrice += price * quantity;

        match = regexp.exec(input);
    }

    console.log(`Bought furniture:`);
    for (let furniture of furnitures) {
        console.log(furniture);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])
console.log(`-------------------`);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])
