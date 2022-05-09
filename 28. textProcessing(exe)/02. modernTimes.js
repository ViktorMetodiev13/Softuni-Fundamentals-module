function modernTimes(sentence) {
    let words = sentence.split(' ')

    for (let word of words) {
        for (let i = 0; i < word.length; i++) {
            if ((word.charCodeAt(i) >= 97 
            && word.charCodeAt(i) <= 122)
            || (word.charCodeAt(i) >= 65 
            && word.charCodeAt(i) <= 122)) {
                if (word.startsWith('#') && word.length > 1) {
                    console.log(word.replace('#', ""));
                }
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special #special8 word in #socialMedia')
console.log('--------------------');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')