function wordOccurrences(words) {
    let result = {};

    for (let word of words) {
        if(result.hasOwnProperty(word) == false) {
            result[word] = 1;
        } else {
            result[word] += 1;
        } 
    }

    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
