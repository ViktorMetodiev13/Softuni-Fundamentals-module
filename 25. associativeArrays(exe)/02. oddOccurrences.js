function oddOccurrences(input) {
    let result = {};

    let words = input.split(' ');

    for (let word of words) {
        let wordToLower = word.toLowerCase();

        if (result.hasOwnProperty(wordToLower) == false) {
            result[wordToLower] = 1;
        } else {
            result[wordToLower]++;
        }
    }
    

    let resultAsArray = Object.entries(result);
    let finalArray = [];

    for (let [key, value] of resultAsArray) {
        if (value % 2 === 1) {
            finalArray.push(key);
        }
    }

    console.log(finalArray.join(' '));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');