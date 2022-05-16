function pianist(input) {
    let numberOfPieces = input.shift();
    let pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = {
            composer,
            key,
        }
    }



    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = tokens[2];
        let p2 = tokens[3];

        let piece = pieces[name];

        if (command == 'Add') {
            if (pieces.hasOwnProperty(name) == true) {
                console.log(`${name} is already in the collection!`);
            } else {
                pieces[name] = {
                    composer: p1,
                    key: p2
                }
                console.log(`${name} by ${p1} in ${p2} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (pieces.hasOwnProperty(name) == true) {
                delete pieces[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            if (pieces.hasOwnProperty(name) == true) {
                piece.key = p1;
                console.log(`Changed the key of ${name} to ${p1}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }

    for (let key in pieces) {
        console.log(`${key} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].key}`);
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])