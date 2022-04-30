function dayofWeek(num) {
    let allDays = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday',
        'Saturday', 'Sunday'];

    if (num <= 6 && num > 0) {
        console.log(allDays[num - 1]);
    } else {
        console.log("Invalid day!");
    }
}
dayofWeek(1)