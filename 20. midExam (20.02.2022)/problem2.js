function solve(arr) {
    let singleVehicle = arr.shift().split(">>");

    let familySum = 0;
    let heavyDutySum = 0;
    let sportsSum = 0;

    let resultArr = [];

    for (let element of singleVehicle) {
        let splitedArr = element.split(' ');

        if (splitedArr[0] === "family") {
            familySum = Math.floor(Number(splitedArr[2]) / 3000) * 12 + (50 - Number(splitedArr[1] * 5));
            resultArr.push(familySum);
            console.log(`A family car will pay ${familySum.toFixed(2)} euros in taxes.`);
        } else if (splitedArr[0] === "heavyDuty") {
            heavyDutySum = Math.floor(Number(splitedArr[2]) / 9000) * 14 + (80 - Number(splitedArr[1] * 8));
            resultArr.push(heavyDutySum);
            console.log(`A heavyDuty car will pay ${heavyDutySum.toFixed(2)} euros in taxes.`);
        } else if (splitedArr[0] === "sports") {
            sportsSum = Math.floor(Number(splitedArr[2]) / 2000) * 18 + (100 - Number(splitedArr[1] * 9));
            resultArr.push(sportsSum);
            console.log(`A sports car will pay ${sportsSum.toFixed(2)} euros in taxes.`);
        } else {
            console.log(`Invalid car type.`);
        }
    }

    let totalRevenue = 0;
    for (let i = 0; i < resultArr.length; i++) {
        totalRevenue += resultArr[i];
    }

    console.log(`The National Revenue Agency will collect ${totalRevenue.toFixed(2)} euros in taxes.`);
}
solve(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])