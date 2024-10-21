function countMondays () {
    const startDate = new Date("2024-9-15");
    const currentDate = new Date();

    let daysSince = currentDate.getTime() - startDate.getTime();
    console.log(daysSince);
    
    
}

countMondays();