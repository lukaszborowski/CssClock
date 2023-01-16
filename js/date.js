function todayDate() {

    const currentDate = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
    let year = currentDate.getFullYear();
    let currMonth = months[currentDate.getUTCMonth()];
    let currDay = days[currentDate.getUTCDay()];
    let currDateNumber = currentDate.getUTCDate();

    document.querySelector(".current--date").innerText = currDay + "," + " " + currDateNumber + " " + currMonth + " " + year;
}

export default todayDate;