function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };

    let JSON1 = JSON.stringify(obj);

    console.log(JSON1);
}

convertToJSON('George', 'Jones', 'Brown')