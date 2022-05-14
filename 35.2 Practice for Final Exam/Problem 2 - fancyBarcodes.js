function fancyBarcodes(input) {
    let productsCount = input.shift();
    let pattern = /@#+(?<product>[A-Za-z0-9]{6,})@#+/g;

    let match = pattern.exec(input);

    for (let i = 0; i < input.length; i++) {
        while (match != null) {
            let line = input.shift();
            if (line.includes(match[0]) == true) {
                let temp = match[1].split('').filter(x => Number(x)).join('');
                if (temp == true) {
                    console.log(`Product group: ${temp}`);
                } else {
                    console.log(`Product group: 00`);
                }
            } else {

            }
        }
    }

    // while (match != null) {
    //     if (match == true) {
    //         console.log(match);
    //     }
    //     match = pattern.exec(input);
    // }
}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
