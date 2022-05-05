function employees(input) {
    // 1 начин
    let listOfEmployees = {};
    for (let currentEmployee of input) {
        listOfEmployees[currentEmployee] = currentEmployee.length;
    }

    for (let currentEmployee in listOfEmployees) {
        console.log(`Name: ${currentEmployee} -- Personal Number: ${listOfEmployees[currentEmployee]}`);
    }

    //2 начин
    let listOfEmployees = [];
    class Employees {
        constructor(name, length) {
            this.name = name;
            this.length = length;
        }
    }

    for (let employee of input) {
        let currentEmployee = new Employees(employee, employee.length);
        listOfEmployees.push(currentEmployee);
    }

    listOfEmployees.forEach((currEmployee) =>
        console.log(
            `Name: ${currEmployee.name} -- Personal Number: ${currEmployee.length}`
        )
    );

    // 3 начин
    let listOfEmployees = {};
    for (let employee of input) {
        listOfEmployees.name = employee;
        listOfEmployees.personalNumber = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${listOfEmployees.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])