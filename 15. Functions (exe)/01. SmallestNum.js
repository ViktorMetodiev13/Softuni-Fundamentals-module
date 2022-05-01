function smallestNum(num1, num2, num3) {
    console.log(minNum(num1, num2, num3));
    function minNum(num1, num2, num3) {
        let smallestNumber = Math.min(num1, num2, num3);
        return smallestNumber;
    }
}

smallestNum(2, 5, 3)