function hogwarts(input) {
    let text = input.shift();

    while (input[0] != 'Abracadabra') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == 'Abjuration') {
            text = text.toUpperCase();
        } else if (command == 'Necromancy') {
            text = text.toLowerCase();
        } else if (command == 'Illusion') {
            if (text.split('').length < p1) {
                //console.log(`The spell was too weak.`);
            } else {
                let leftPart = text.split('').slice(0, p1).join('');
                console.log(leftPart);
                // let changed = text.split('').slice(p1, p2).join('');
                // changed = p2;
                // let rightPart = text.split('').slice(p1 + 1, text.length).join('');
                // text = leftPart + changed + rightPart;
                // console.log(text);
                // console.log('Done!');
            }
        } else if (command == 'Divination') {

        } else if (command == 'Alteration') {

        } else {
            //console.log(`The spell did not work!`);
        }
    }

    //console.log(text);
}

hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])
