function piccolo(input) {
    let parking = new Set();

    for (let line of input) {
        let [command, number] = line.split(', ');
        
        if (command  == 'IN') {
            parking.add(number)
        } else {
            parking.delete(number);
        }
    }

    let result = Array.from(parking).sort();
    
    for (let car of result) {
        console.log(car);
    }
    /*
    let sorted = Array.from(parking.entries()).sort((a,b) => a[0] - b[0]);

    for (let element of sorted) {
        console.log(element[0]);
    }
    */
    
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])