function wildZoo(input) {
    let animals = {};

    while (input[0] != 'EndDay') {
        let tokens1 = input.shift().split(': ');
        let command = tokens1[0];

        let tokens2 = tokens1[1].split('-');
        let name = tokens2[0];
        let p1 = tokens2[1];
        let p2 = tokens2[2];

        if (command == 'Add') {
            if (animals.hasOwnProperty(name) == false) {
                animals[name] = {
                    neededFood: Number(p1),
                    area: p2,
                };
            } else {
                animals[name].neededFood = animals[name].neededFood + Number(p1);
            }
        } else if (command == 'Feed') {
            if (animals.hasOwnProperty(name) == true) {
                animals[name].neededFood = animals[name].neededFood - Number(p1);
            }

            if (animals[name].neededFood - Number(p1) <= 0) {
                console.log(`${name} was successfully fed`);
                delete animals[name];
             }
        }
    }

    

}

wildZoo(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"])
