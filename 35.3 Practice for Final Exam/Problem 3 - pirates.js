function pirates(input) {
    let targets = {};

    while (input[0] !== 'Sail') {
        let [cityName, population, gold] = input.shift().split('||');

        if (targets.hasOwnProperty(cityName) == true) {
            targets[cityName].population = Number(targets[cityName].population) + Number(population);
            targets[cityName].gold = Number(targets[cityName].gold) + Number(gold);
        } else {
            targets[cityName] = {
                population,
                gold,
            }
        }
    }

    while (input[0] !== 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens[0];
        let cityName = tokens[1];
        let p1 = tokens[2];
        let p2 = tokens[3];

        let target = targets[cityName];
        if (command == 'Plunder') {
            target.population =  Number(target.population) - Number(p1);
            target.gold = Number(target.gold) - Number(p2);

            console.log(`${cityName} plundered! ${p2} gold stolen, ${p1} citizens killed.`);

            if (target.population <= 0 || target.gold <= 0) {
                delete targets[cityName];
                console.log(`${cityName} has been wiped off the map!`);
            }
        } else if (command == 'Prosper') {
            if (p1 < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                target.gold = Number(target.gold) + Number(p1);
                console.log(`${p1} gold added to the city treasury. ${cityName} now has ${target.gold} gold.`);
            }
        }
    }

    let count = 0;
    for (let key in targets) {
        count++;
    }

    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (let key in targets) {
            console.log(`${key} -> Population: ${targets[key].population} citizens, Gold: ${targets[key].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
console.log('-----------------------------------------');
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
