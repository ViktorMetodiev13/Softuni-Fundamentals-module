function replaceRepeatingChars(chars) {
    let result = "";

    chars = chars.split('');
    
    for (let i = 0; i < chars.length; i++) {
        let currentIndex = chars[i];
        let nextIndex = chars[i + 1];

        if (currentIndex != nextIndex) {
            result += currentIndex;
        } 
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')