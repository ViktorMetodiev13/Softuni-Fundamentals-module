function addressBook(input) {
    let result = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        result[name] = address;
    }

    let sorted = Object.entries(result);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));

    for (let person of sorted) {
        console.log(person[0], '->', person[1]);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])