function DispayCurrentDate () {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();

    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    console.log(`${dayOfWeek}. Now: ${currentDate.getHours()}PM  ${currentDate.getMinutes()+ ":" +currentDate.getSeconds()}`);
}
DispayCurrentDate();