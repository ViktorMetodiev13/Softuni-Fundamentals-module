function secretChat(input) {
    let text = input.shift();

    while (input[0] !== 'Reveal') {
        let [command, p1, p2] = input.shift().split(':|:');

        if (command == 'InsertSpace') {
            let left = text.split('').slice(0, p1).join("");
            let right = text.slice(p1);
            text = left + " " + right;
        } else if (command == 'Reverse') {
            let index = text.indexOf(p1)

            let left = text.slice(0, index);
            let right = text.slice(index + p1.length);

            text = left + right + p1.split('').reverse().join('');
        } else if (command == 'ChangeAll') {
            let result = text.split('');
            let temp = [];
            
            for (let i = 0; i < result.length; i++) {
                if (result[i] == p1) {
                    temp.push(p2);
                } else {
                    temp.push(result[i]);
                }
            }

            text = temp.join('');
        }
    }

    console.log(`You have a new text message: ${text}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])
console.log('----------------');
