function towns(input) {
    let result = {};
    for (let tokens of input) {
        let townInfo = tokens.split(' | ');
        let name = townInfo[0];
        let latitude = townInfo[1];
        let longitude = townInfo[2];

        result.town = name;
        result.latitude = Number(latitude).toFixed(2);
        result.longitude = Number(longitude).toFixed(2);
        console.log(result);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])