function adAstra(input) {
    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let match = pattern.exec(input);
    let result = [];
    let sumOfCalories = 0;

    while (match != null) {
        sumOfCalories += Number(match.groups.calories);
        let name = match.groups.name;
        let expirationDate = match.groups.expirationDate;
        let calories = match.groups.calories;
        let element = `Item: ${name}, Best before: ${expirationDate}, Nutrition: ${calories}`;
        result.push(element);

        match = pattern.exec(input);
    }
    let days = Math.floor(sumOfCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    console.log(result.join('\n'));
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])