function arrayManipulation(commands) {
    let arr = commands.shift().split(' ').map(x => Number(x));

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add": break;
            case "Remove": break;
            case "RemoveAt": break;
            case "Insert": break;
        }
    }

    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }

    console.log(arr.join(' '));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)