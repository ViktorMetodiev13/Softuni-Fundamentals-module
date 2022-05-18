function hogwarts(input) {
    let text = input.shift();

    while (input[0] != 'Abracadabra') {
        let line = input.shift().split(' ');
        let command = line[0];

        if (command == 'Abjuration') {
            text = Abjuration(text);
            console.log(text);
        } else if (command == 'Necromancy') {
            text = Necromancy(text);
            console.log(text);
        } else if (command == 'Divination') {
            if (text.includes(line[1])) {
                text = Divination(text, line[1], line[2]);
                console.log(text);
            }
        } else if (command == 'Alteration') {
            if (text.includes(line[1])) {
                text = Alteration(text, line[1]);
                console.log(text);
            }
        } else if (command == 'Illusion') {
            let index = Number(line[1]);
            let char = line[2];
            if (index >= 0 && index < text.length) {
                text = Illusion(text, index, char);
                console.log('Done!');

            } else {
                console.log(`The spell was too weak.`);
            }
        } else {
            console.log(`The spell did not work!`);
        }
    }
    function Abjuration(string) {
        string = string.toUpperCase();
        return string;
    }

    function Necromancy(string) {
        string = string.toLowerCase();
        return string;
    }

    function Illusion(string, index, letter) {
        let output = '';
        for (let i = 0; i < string.length; i++) {
            if (i == index) {
                output += letter;
            } else {
                output += string[i];
            }
        }
        return output;
    }

    function Divination(string, substring, replacement) {
        string = string.split(substring).join(replacement);
        return string;
    }

    function Alteration(string, substring) {
        return (string = string.split(substring).join(''));
    }
}


