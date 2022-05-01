function factorialDivision(factorialNum, division) {
    let sumFirstFactorial = 1;
    let sumSecondFactorial = 1;
    for (let i = 1; i <= factorialNum; i++) {
        sumFirstFactorial *= i;
    }
    for (let i = 1; i <= division; i++) {
        sumSecondFactorial *= i;
    }

    console.log((sumFirstFactorial / sumSecondFactorial).toFixed(2));
}
factorialDivision(6, 2);