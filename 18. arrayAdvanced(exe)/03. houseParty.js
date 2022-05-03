function houseParty(arr){
    let output = [];
    for (let commands of arr) {
        let Currcommand = commands.split(' ');
        if (Currcommand.length === 3) {
            if (output.includes(Currcommand[0])) {
                console.log(`${Currcommand[0]} is already in the list!`);
            } else {
                output.push(Currcommand[0]);
            }
        } else {
            if (output.includes(Currcommand[0])) {
                for (let i = 0; i < output.length; i++) {
                    if (Currcommand[0] === output[i]){
                        output.splice(i, 1)
                    }
                }
            } else {
                console.log(`${Currcommand[0]} is not in the list!`);
            }
        }
    }

    console.log(output.join('\n'));
    
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])