function valueOfString(input) {
    let str = input[0];
    let command = input[1];

    let totalSum = 0;

    if (command == "UPPERCASE") {
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 65
                && str.charCodeAt(i) <= 90) {
                totalSum += str.charCodeAt(i);
            }
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i].charCodeAt() >= 97
                && str[i].charCodeAt() <= 122) {
                totalSum += str.charCodeAt(i);
            }
        }
    }

    if (command == "UPPERCASE") {
        console.log(`The total sum is: ${totalSum}`);
    } else {
        console.log(`The total sum is: ${totalSum}`);
    }
}

valueOfString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE'])