function passwordValidator(password) {
    function isLengthEnough(stringPasword) {
        return stringPasword.length >= 6 && stringPasword.length <= 10;
    }
    function isOnlyLettersAndDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let currentSymbol = password[i].charCodeAt(0);
            if ((currentSymbol < 48 && currentSymbol > 57) 
            && (currentSymbol < 65 && currentSymbol > 90)
            && (currentSymbol < 97 && currentSymbol > 122)) {
                return false;
            } else {
                return true;
            }
            
        }
    }
    function isThere2Digits(password) {
        let digitCount = 0;
        for (let i = 0; i < password.length; i++) {
            let currentSymbol = password[i].charCodeAt(0);
            if (currentSymbol >= 48 && currentSymbol <= 57) {
                digitCount++;
            }
        }
        return digitCount >= 2 ? true: false;
    }
    let isLengthValid = isLengthEnough(password);
    let isLetterAndDigitsOnly = isOnlyLettersAndDigits(password);
    let isAtleast2Digits = isThere2Digits(password);
    
    if (isLengthValid && isLetterAndDigitsOnly && isAtleast2Digits) {
        console.log(`Password is valid`);
    } 
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLetterAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isAtleast2Digits) {
        console.log("Password must have at least 2 digits");
    }

}
passwordValidator('logIn');