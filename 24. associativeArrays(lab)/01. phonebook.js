function phonebook(input) {
    let result = new Map();
    for (let line of input) {
        let personInfo = line.split(' ');
        let name = personInfo[0];
        let phoneNumber = personInfo[1];
        result.set(name, phoneNumber);
    }

    for (let person of result) {
        console.log(person[0], '->', person[1]);
    }
}
phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])