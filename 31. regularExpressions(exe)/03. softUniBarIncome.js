function softUniBarIncome(input) {
    let totalIn = 0;
    for (let line of input) {
        let regexp = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>[A-Z][a-z]+)>[^|$%.]*\|(?<quantity>[\d]+)\|[^|$%.]*?(?<price>[\d+][.]?[\d]+)\$/g;
        let result = regexp.exec(line);

        if (result) {
            let customerName = result.groups.name;
            let product = result.groups.product;
            let customerSum = +result.groups.price * +result.groups.quantity;
            totalIn += customerSum;
            console.log(`${customerName}: ${product} - ${customerSum.toFixed(2)}`);
        } else if (line =='end of shift') {
            console.log(`Total income: ${totalIn.toFixed(2)}`);
        }
    } 
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
