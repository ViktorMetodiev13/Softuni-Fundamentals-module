function searchForANumber(originalArr, manipulatingArr){
    let afterFirstNum = originalArr.splice(0, manipulatingArr[0]);
    let afterSecondNum = afterFirstNum.splice(manipulatingArr[1]);
    
    let count = 0;
    for (let i = 0; i < afterSecondNum.length; i++) {
        if (afterSecondNum[i] === manipulatingArr[2]) {
            count++;
        }
    }

    console.log(`Number ${manipulatingArr[2]} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 3, 1, 6],
    [5, 2, 3])