function TriangleOfNumbers(num) {
    let output = "";
    for (let i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            output += `${i} `;
        }
        
        console.log(output);
        output = "";
    }
}
TriangleOfNumbers(3)