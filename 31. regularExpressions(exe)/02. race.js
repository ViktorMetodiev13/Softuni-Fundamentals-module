function race(input) {
    let names = input.shift().split(', ');
    let racers = {};

    for (let line of input) {
        if (line !== 'end of race') {
            let racerName = line.match(/[A-Z]+/gi).join("");
            let distance = line.match(/\d/g);
            let totalDistance = 0;

            for (let km of distance) {
                totalDistance += +km;
            }

            if (names.includes(racerName) == true) {
                if (racers.hasOwnProperty(racerName) == false) {
                    racers[racerName] = totalDistance;
                } else {
                    racers[racerName] += totalDistance;
                }
            } 
        }
    }

    let sortedArray = Object.keys(racers)
    .sort((a,b) => racers[b] - racers[a]);
    
    console.log(`1st place: ${sortedArray[0]}\n2nd place: ${sortedArray[1]}\n3rd place: ${sortedArray[2]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])