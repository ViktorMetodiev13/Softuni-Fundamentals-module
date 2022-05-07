function schoolGrades(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (result.has(name) == false) {
            result.set(name, []);
        }

        let existing = result.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    let sorted = Array.from(result);
    sorted.sort((a,b) => 0);

    for (let [name, grades] in sorted) {
        console.log(name, grades);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])