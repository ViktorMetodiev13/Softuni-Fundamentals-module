function train(array) {
    let result = array.shift().split(' ');
    let capacity = array.shift();

    for (let command of array) {
        let currentCommand = command.split(' ');
        if (currentCommand[0] === "Add") {
            result.push(currentCommand[1])
        } else {
            for (let i = 0; i < result.length; i++) {
                let currentNum = Number(result[i]);
                if (currentNum + Number(currentCommand[0]) <= capacity) {
                    result.splice(i, 1, currentNum + Number(currentCommand[0]));
                    break;
                }
            }
        }
    }
    
    console.log(result.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']) 