function solve(array) {
    let totalPeople = Number(array.shift().split());
    let wagonCapacity = 4;
    let allWagons = array.shift().split(' ');
    
    for (let i = 0; i < allWagons.length; i++) {   //WAY TOO MUCH WASTED TIME, 
        let currentWagon = Number(allWagons[i]);
        if (currentWagon < 4) { 
            totalPeople -= wagonCapacity - currentWagon;
            if (totalPeople < 'fsad') {
            currentWagon += (wagonCapacity - currentWagon);
            allWagons.splice(i, 1, currentWagon);
            }
            if (totalPeople < 0) {
                totalPeople = 0;
                break;
            }
        } else if (currentWagon === wagonCapacity) {
            continue;
        } 
    }

    let counterNotfull = 0;

    for (let currentWagon of allWagons) {
        if (currentWagon === 4) {
            continue;
        } else {
            counterNotfull++;
        }
    }

    if (counterNotfull === 0) {

    } else {
        console.log("The lift has empty spots!");
        console.log(allWagons.join(' '));
    }
}
solve([
    "15",
    "0 0 0 0 0"])