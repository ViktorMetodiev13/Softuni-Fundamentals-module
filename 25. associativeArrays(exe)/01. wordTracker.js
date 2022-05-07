function wordTracker(words) {
    let result = {};
    let keys = words.shift().split(' ');

    for (let key of keys) {
        result[key] = 0;
    }

    for (let word of words) {
        if (result.hasOwnProperty(word) == true) {
            result[word]++;
        }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(key, '-', value);
    }
}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)