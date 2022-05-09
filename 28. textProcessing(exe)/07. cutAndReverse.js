function cutAndReverse(string) {
    let firstHalf = string.split('').slice(0, string.length / 2).reverse().join('');
    let secondHalf = string.split('').slice(string.length / 2, string.length).reverse().join('');
    
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');