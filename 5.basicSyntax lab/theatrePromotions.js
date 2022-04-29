function theatrePromotions(day, age) {
    let totalCost = 0;

    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age >= 0 && age <= 18) {
                    totalCost += 12;
                } else if (age > 18 && age <= 64) {
                    totalCost += 18;
                } else {
                    totalCost += 12;
                }
                break;
            case "Weekend":
                if (age >= 0 && age <= 18) {
                    totalCost += 15;
                } else if (age > 18 && age <= 64) {
                    totalCost += 20;
                } else {
                    totalCost += 15;
                }
                break;
            case "Holiday":
                if (age >= 0 && age <= 18) {
                    totalCost += 5;
                } else if (age > 18 && age <= 64) {
                    totalCost += 12;
                } else {
                    totalCost += 10;
                }
                break;
        }
        console.log(`${totalCost}$`);
    } else {
        console.log("Error!");
    }

}
theatrePromotions('Weekday', -1)