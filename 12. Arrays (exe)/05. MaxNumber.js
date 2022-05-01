function maxNumber(arr) {
    let topIntegerArr = [];

    for (let index = 0; index < arr.length; index++) {
        let currentElement = arr[index];
        let isTopInteger = true;
        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            
            if (currentElement <= nextEl) {
                isTopInteger = false;
                break;
            }
        }
        if(isTopInteger) {
            topIntegerArr.push(currentElement);
        }
    }
    console.log(topIntegerArr.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);