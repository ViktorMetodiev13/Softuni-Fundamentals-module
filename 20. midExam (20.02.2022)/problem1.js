function solve(array) {
    let budget = array.shift();
    let studentsCount = array.shift();
    let singlePackageOfFlourPrice = array.shift();
    let singleEggPrice = array.shift();
    let singleApronPrice = array.shift();

    let flourTotalPrice = 0;
    for (let i = 1; i <= studentsCount; i++) {
        if (i % 5 === 0) {
            continue;
        } else {
            flourTotalPrice += singlePackageOfFlourPrice;
        }
    }

    let apronTotalPrice = singleApronPrice * (Math.ceil(studentsCount * 1.20));
    let eggTotalPrice = singleEggPrice * 10 * studentsCount;
    
    let totalSum = (apronTotalPrice + eggTotalPrice + flourTotalPrice).toFixed(2);

    if (budget >= totalSum) {
        console.log(`Items purchased for ${totalSum}$.`);
    } else {
        console.log(`${(totalSum - budget).toFixed(2)}$ more needed.`);
    }

}
solve([100,
    25,
    4.0,
    1.0,
    6.0])
    
    
    
    
    
    

