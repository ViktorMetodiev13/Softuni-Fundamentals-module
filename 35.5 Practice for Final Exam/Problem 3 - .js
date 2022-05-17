function plantDiscovery(input) {
    let numberOfPlants = input.shift();
    let plants = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let tokens = input.shift().split('<->');
        let name = tokens[0];
        let rating = Number(tokens[1]);
        
        if (plants.hasOwnProperty(name) == true) {
            plants[name].rarity = rating;
        } else {
            plants[name] = {
                rating,
            }
        }
    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(':');
        let command = tokens[0];

        let parameters = tokens[1].split(' - ');
        let name = parameters[0];
        let p1 = parameters[1];
        
        let plant = plants[name];

        if (command == 'Rate') {
            if (plants.hasOwnProperty(name) == true) {
                
            }
            plant.rating = Number(plant.rating) + Number(p1);
        } else if (command == 'Update') {

        } else if (command == 'Reset') {

        }
    }
   
    
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
