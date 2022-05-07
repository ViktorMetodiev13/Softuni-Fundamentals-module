function computerUsers(input) {
    let result = {};

    for (let line of input) {
        let [companyName, employeeId] = line.split(' -> ');
        
        if (result.hasOwnProperty(companyName) == false) {
            result[companyName];
        }

    }

}
computerUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])