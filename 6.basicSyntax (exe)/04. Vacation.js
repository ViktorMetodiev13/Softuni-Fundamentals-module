function vacation(peopleCount, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek === "Friday") {
                totalPrice += 8.45 * peopleCount;
            } else if (dayOfWeek === "Saturday") {
                totalPrice += 9.80 * peopleCount;
            } else if (dayOfWeek === "Sunday") {
                totalPrice += 10.46 * peopleCount;
            }
            break;
        case "Business":
            if (dayOfWeek === "Friday") {
                totalPrice += 10.90 * peopleCount;
            } else if (dayOfWeek === "Saturday") {
                totalPrice += 15.60 * peopleCount;
            } else if (dayOfWeek === "Sunday") {
                if (peopleCount >= 100) {
                    totalPrice += 16 * (peopleCount - 10);
                } else {
                    totalPrice += 16 * peopleCount;
                }
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                totalPrice += 15 * peopleCount;
            } else if (dayOfWeek === "Saturday") {
                totalPrice += 20 * peopleCount;
            } else if (dayOfWeek === "Sunday") {
                totalPrice += 22.50 * peopleCount;
            }
            break;
    }

    if (peopleCount >= 30 && typeOfGroup === "Students") {
        totalPrice *= 0.85;
    } else if (typeOfGroup === "Regular" && (peopleCount >= 10 && peopleCount <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
)