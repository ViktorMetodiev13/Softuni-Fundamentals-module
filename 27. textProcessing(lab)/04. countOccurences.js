function countOccurences(text, word) {
    console.log(text.split(' ').filter(x => x == word).length);
}

countOccurences('This is a word and it also is a sentence',
'is')