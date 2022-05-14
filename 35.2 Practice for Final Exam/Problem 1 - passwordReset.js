function passwordReset(input) {
    let text = input.shift();

    while (input[0] != "Done") {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == 'TakeOdd') {
            let temp = text.split('');
            let result = []
            for (let i = 0; i < temp.length; i++) {
                if (i % 2 !== 0) {
                    result.push(temp[i]);
                }
            }
            text = result.join('');
            console.log(text);
        } else if (command == 'Cut') {
            let temp = text.split('');
            let leftPart = temp.slice(0, Number(p1)).join('');
            let rightPart = temp.slice(Number(p1) + Number(p2), text.length).join('');
            text = leftPart + rightPart;
            console.log(text);
        } else if (command == 'Substitute') {
            if (text.includes(p1) == true) {
                text = text.split(p1).join(p2);
                console.log(text);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${text}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])