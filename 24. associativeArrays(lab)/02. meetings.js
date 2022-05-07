function meetings(input) {
    let result = new Map();

    for (let line of input) {
        let [day, name] = line.split(' ');
        if (!result.has(day)) {
            console.log(`Scheduled for ${day}`);
            result.set(day, name);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let person of result) {
        console.log(person[0], '->', person[1]);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])