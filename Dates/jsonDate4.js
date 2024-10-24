function countMondays() {
    const startDate = new Date("2024-09-15");
    const currentDate = new Date();
    let count = 0;

    let tempDate = new Date(startDate);
    while (tempDate <= currentDate) {
      
        if (tempDate.getDay() === 1) {
            count++;
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }

    console.log(`Number of Mondays since ${startDate.toDateString()}: ${count}`);
}

countMondays();
