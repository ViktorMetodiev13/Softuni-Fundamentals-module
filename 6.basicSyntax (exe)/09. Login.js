function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let currentPassword = input[index].split("").reverse().join("");
    let counter = 0;

    while (username !== currentPassword) {
        if (username !== currentPassword) {
            console.log("Incorrect password. Try again.");
            counter++;
        }

        if (counter === 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        

        currentPassword = input[index + 1].split("").reverse().join("");
        index++;
    }

    if (currentPassword === username){
        console.log(`User ${username} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])