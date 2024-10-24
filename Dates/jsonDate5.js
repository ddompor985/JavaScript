function findMondaySeptembers() {
    const startDate = new Date();
    const endYear = 2070;
    let countDays = 0;

    for (let currentYear = startDate.getFullYear(); currentYear <= endYear; currentYear++) {
        const date = new Date(currentYear, 8, 15);
        if (date.getDay() === 1) {
            countDays += 1;
        }
    }
    return countDays;
}

console.log(findMondaySeptembers());
