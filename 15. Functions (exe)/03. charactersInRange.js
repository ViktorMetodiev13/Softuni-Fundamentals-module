function charactersInRange(char1, char2) {
    let char1Num = char1.charCodeAt(0);
    let char2Num = char2.charCodeAt(0);
    let result = "";
    if (char1Num <= char2Num) {
        for (let i = char1Num + 1; i < char2Num; i++) {
            result += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let i = char2Num + 1; i < char1Num; i++) {
            result += `${String.fromCharCode(i)} `;
        }
    }

    console.log(result);
}
charactersInRange('a', 'd')