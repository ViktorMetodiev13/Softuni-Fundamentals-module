function problem1(input) {
    let sumWithoutTaxed = 0;

    while (input[0] !== 'special' || input[0] !== 'regular') {
        if (input[0] === 'special' || input[0] === 'regular') {
            break;
        }
        let currentPrice = Number(input.shift());

        if (currentPrice >= 0) {
            sumWithoutTaxed += currentPrice;
        } else {
            console.log(`Invalid price!`);
        }
    }

    if (sumWithoutTaxed === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTaxed.toFixed(2)}$`);

        if (input[0] === 'special') {
            let sumAfterTax = sumWithoutTaxed * 1.20;
            let totalTaxed = sumAfterTax - sumWithoutTaxed;
            console.log(`Taxes: ${totalTaxed.toFixed(2)}$`);
            console.log(`-----------`);
            let totalPriceWithSpecial = sumAfterTax * 0.90;
            console.log(`Total price: ${totalPriceWithSpecial.toFixed(2)}$`);
        } else {
            let sumAfterTax = sumWithoutTaxed * 1.20;
            let totalTaxed = sumAfterTax - sumWithoutTaxed;
            console.log(`Taxes: ${totalTaxed.toFixed(2)}$`);
            console.log(`-----------`);
            let totalPriceWithSpecial = sumAfterTax * 1;
            console.log(`Total price: ${totalPriceWithSpecial.toFixed(2)}$`);
        }
    }

}
problem1([
    'regular'])
    
