function rightPlace(word, char, match) {
    let result = "";

    for (let i = 0; i <= word.length - 1; i++) {
        let currentLetter = word[i];
        if (currentLetter === "_") {
            result += char;
        } else {
            result += currentLetter;
        }
    }

    let output = result === match? "Matched": "Not Matched";

    console.log(output);

}
rightPlace('Str_ng', 'i', 'String');