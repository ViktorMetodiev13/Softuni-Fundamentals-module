function imitationGame(input) {
    let text = input.shift();

    while (input[0] != 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == 'Move') {
            let extracted = text.split('').slice(0, p1).join('');
            let notExtracted = text.split('').slice(p1).join('');
            text = notExtracted + extracted;
        } else if (command == 'Insert') {
            let temp = '';
            if (text.length >= p1) {
                for (let i = 0; i < text.length; i++) {
                    if (i == p1) {
                        temp += p2;
                        temp += text[i];
                    } else {
                        temp += text[i];
                    }
                }
            } else if (text.length < p1){
                text += p2;
            }
            text = temp;
        } else if (command == 'ChangeAll') {
            for (let i = 0; i < text.length; i++) {
                if (text[i] == p1) {
                    text = text.replace(p1, p2);
                }
            }
        }
    }

    console.log(`The decrypted message is: ${text}`);
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ])