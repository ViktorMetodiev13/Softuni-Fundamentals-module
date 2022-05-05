function solve(inputArr) {
    let resultArr = [];

    while (inputArr[0] !== "end") {
        let splitedCommands = inputArr.shift().split(' ');
        if (splitedCommands[0] == "Chat") {
            resultArr.push(splitedCommands[1]);
        } else if (splitedCommands[0] == "Delete") {
            if (resultArr.includes(splitedCommands[1])) {
                for (let i = 0; i < resultArr.length; i++) {
                    if (resultArr[i] === splitedCommands[1]) {
                        resultArr.splice(i, 1);
                        i = i - 1;
                    }
                }
            }
        } else if (splitedCommands[0] == "Edit") {
            if (resultArr.includes(splitedCommands[1])) {
                for (let i = 0; i < resultArr.length; i++) {
                    if (resultArr[i] === splitedCommands[1]) {
                        resultArr.splice(i, 1, splitedCommands[2]);
                        i = i - 1;
                    }
                }
            }
        } else if (splitedCommands[0] == "Pin") {
            if (resultArr.includes(splitedCommands[1])) {
                for (let i = 0; i < resultArr.length; i++) {
                    if (resultArr[i] === splitedCommands[1]) {
                        let pinnedMessage = resultArr.splice(i, 1);
                        resultArr.push(pinnedMessage);
                    }
                }
            }
        } else if (splitedCommands[0] == "Spam") {
            let deletedFirstCommand = splitedCommands.shift();
            for (let i = 0; i < splitedCommands.length; i++) {
                resultArr.push(splitedCommands[i]);
            }
        }
    }

    console.log(resultArr.join('\n'));
}
solve(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"])


