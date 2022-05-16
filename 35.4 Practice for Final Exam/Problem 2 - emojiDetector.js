function emojiDetector(input) {
    let pattern = /da/g;
    let match = pattern.exec(input);

    let coolThreshold = 1;
    let numbers = [];

    let splitedInput = input.shift().split(' ');
    for (let element of splitedInput) {
        let digitInElement = element.split('');
        for (let i = 0; i < digitInElement.length; i++) {
            if (digitInElement.charCodeAt(i) >= 48 && digitInElement.charCodeAt(i) <= 57) {
                coolThreshold *= digitInElement[i];
            }
        }
        element = Number(element);
        if (Number.isInteger(element) == true) {
            numbers.push(element.toString());
        }
    }

    while (numbers[0] != undefined) {
        let numberDigits = numbers.shift().split('');
        for (let i = 0; i < numberDigits.length; i++) {
            coolThreshold *= numberDigits[i];
        }
    }

    console.log(coolThreshold);

    // while (match != null) {

    // }
}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
])