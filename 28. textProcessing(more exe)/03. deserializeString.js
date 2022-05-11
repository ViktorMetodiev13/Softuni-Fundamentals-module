function deserializeString(input) {
    let result = [];

    while (input[0] !== "end") {
        let currLine = input.shift();
        let tokens = currLine.split(":");
        let letter = tokens.shift();

        for (let i = 0; i < tokens.length; i++) {
            let indexes = tokens[i].split('/');
            result.splice(indexes[i], 1, letter) 
        }
    }

}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end'])