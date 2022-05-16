function activationKey(input) {
    let rawKey = input.shift();

    while (input[0] != 'Generate') {
        let tokens = input.shift().split('>>>');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        if (command == 'Contains') {
            if (rawKey.split('p1') == true) {
                console.log(`${rawKey} contains ${p1}.`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command == 'Flip') {
            if (p1 == 'Upper') {
                let leftPart = rawKey.split('').slice(0, p2).join('');
                let changed = rawKey.split('').slice(p2, p3).join('').toUpperCase();
                let rightPart = rawKey.split('').slice(p3).join('');
                rawKey = leftPart + changed + rightPart;
                console.log(rawKey);
            } else if (p1 == 'Lower') {
                let leftPart = rawKey.split('').slice(0, p2).join('');
                let changed = rawKey.split('').slice(p2, p3).join('').toLowerCase();
                let rightPart = rawKey.split('').slice(p3).join('');
                rawKey = leftPart + changed + rightPart;
                console.log(rawKey);
            }
        } else if (command == 'Slice') {
            let leftPart = rawKey.split('').slice(0, p1).join('');
            let rightPart = rawKey.split('').slice(p2, rawKey.length).join('');
            rawKey = leftPart + rightPart;
            console.log(rawKey);
        }
    }

    console.log(`Your activation key is: ${rawKey}`);
}

activationKey(["abcdefghjklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
console.log(`----------------------------------------`);
activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

