function displayDate(dateStr) {
    const dateObj = new Date(dateStr);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    const monthName = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    console.log(`Day: ${dayOfWeek}, Month: ${monthName}, Year: ${year}`);
}

displayDate('2024-10-21'); 
