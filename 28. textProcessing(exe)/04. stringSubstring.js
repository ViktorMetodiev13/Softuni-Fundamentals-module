function stringSubstring(searchedWord, text) {
    let words = text.split(" ");
    
    for (let word of words) {
        word = word.toLowerCase();
        if (word === searchedWord) {
            return console.log(word);
        }
    }

    console.log(`${searchedWord} not found!`);
}
stringSubstring('javascript',
'JavaScript is the best programming language');