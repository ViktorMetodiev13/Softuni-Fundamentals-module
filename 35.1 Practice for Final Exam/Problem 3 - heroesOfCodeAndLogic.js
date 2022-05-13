function heroesOfCodeAndLogic(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroData = input.shift().split(' ');
        let name = heroData[0];
        let hp = heroData[1];
        let mp = heroData[2];
        heroes[name] = {
            hp,
            mp
        };
    }

    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let heroDetails = heroes[name];

        if (command == 'CastSpell') {
            if (heroDetails.mp >= p1) {
                heroDetails.mp = Number(heroDetails.mp) - p1;
                console.log(`${name} has successfully cast ${p2} and now has ${heroDetails.mp - p1} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }
        } else if (command == 'TakeDamage') {
            heroDetails.hp = Number(heroDetails.hp) - p1;
            if (heroDetails.hp > 0) {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${heroDetails.hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${p2}!`);
                delete heroes[name];
            }
        } else if (command == 'Recharge') {
            let mp = Math.min((200 - heroDetails.mp), p1);
            heroDetails.mp = Number(heroDetails.mp) + mp;
            console.log(`${name} recharged for ${mp} MP!`);
        } else if (command == 'Heal') {
            let hp = Math.min((100 - heroDetails.hp), p1);
            heroDetails.hp = Number(heroDetails.hp) + hp;
            console.log(`${name} healed for ${hp} HP!`);
        }
    }

    for (let key in heroes) {
        console.log(key);
        console.log(`  HP: ${heroes[key].hp}`);
        console.log(`  MP: ${heroes[key].mp}`);
    }
}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
console.log('-------------------------');
heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ])