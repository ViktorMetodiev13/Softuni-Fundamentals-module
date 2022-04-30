function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalCost = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            totalCost += helmetPrice;
        }
        if (i % 3 === 0) {
            totalCost += swordPrice;
        }
        if (i % 6 === 0) {
            totalCost += shieldPrice;
        }
        if (i % 12 === 0) {
            totalCost += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
)