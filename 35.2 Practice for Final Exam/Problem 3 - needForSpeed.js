function needForSpeed(input) {
    let carCount = input.shift();
    let cars = {};

    for (let i = 0; i < carCount; i++) {
        let [name, mileage, fuel] = input.shift().split('|');
        cars[name] = {
            mileage,
            fuel,
        }
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);

        let carDetails = cars[name];

        if (command == 'Drive') {
            if (Number(carDetails.fuel) >= p2) {
                carDetails.fuel = Number(carDetails.fuel) - p2;
                carDetails.mileage = Number(carDetails.mileage) + p1;
                console.log(`${name} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }

            if (Number(carDetails.mileage) >= 100000) {
                console.log(`Time to sell the ${name}!`);
                delete cars[name];
            }
        } else if (command == 'Refuel') {
            if (Number(carDetails.fuel) + p1 > 75) {
                let overcharge = 75 - Number(carDetails.fuel);
                carDetails.fuel = 75;
                console.log(`${name} refueled with ${overcharge} liters`);
            } else {
                carDetails.fuel = Number(carDetails.fuel) + p1;
                console.log(`${name} refueled with ${p1} liters`);
            }

        } else if (command == 'Revert') {
            if (Number(carDetails.mileage) - p1 < 10000) {
                carDetails.mileage = 10000;
            } else {
                carDetails.mileage = Number(carDetails.mileage) - p1;
                console.log(`${name} mileage decreased by ${p1} kilometers`);
            }
        }
    }

    for (let key in cars) {
        console.log(`${key} -> Mileage: ${cars[key].mileage} kms, Fuel in the tank: ${cars[key].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log(`-------------------------------------`);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])
