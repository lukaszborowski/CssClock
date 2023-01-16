const zeroUp =      `border-bottom: 10px rgba(141, 139, 139, 0.10) solid;`;
const zeroDown =    `border-top: 10px rgba(141, 139, 139, 0.10) solid;`;
const oneUp =       `border-top: 20px rgba(141, 139, 139, 0.10) solid;
                         border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 10px rgba(141, 139, 139, 0.10) solid`;
const oneDown =     `border-top: 10px rgba(141, 139, 139, 0.10) solid;
                         border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 20px rgba(141, 139, 139, 0.10) solid;`;
const twoUp =       `border-left: 20px rgba(141, 139, 139, 0.10) solid;`;
const twoDown =     `border-right: 20px rgba(141, 139, 139, 0.10) solid;`;
const threeUp =     `border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 10px rgba(141, 139, 139 0.10) solid`;
const threeDown =   `border-left: 20px rgba(141, 139, 139, 0.10) solid;`;
const fourUp =      `border-top: 20px rgba(141, 139, 139, 0.10) solid;`;
const fourDown =    `border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 20px rgba(141, 139, 139, 0.10) solid;`;
const fiveUp =      `border-right: 20px rgba(141, 139, 139, 0.10) solid;`;
const fiveDown =    `border-left: 20px rgba(141, 139, 139, 0.10) solid;`;
const sixUp =       `border-right: 20px rgba(141, 139, 139, 0.10) solid;`;
const sevenUp =     `border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 10px rgba(141, 139, 139, 0.10) solid;`;
const sevenDown =   `border-left: 20px rgba(141, 139, 139, 0.10) solid;
                         border-top: 10px rgba(141, 139, 139, 0.10) solid;
                         border-bottom: 20px rgba(141, 139, 139, 0.10) solid;`;
const nineDown =    `border-left: 20px rgba(141, 139, 139, 0.10) solid`;

 function startClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursString = hours.toString();
    const minutesString = minutes.toString();
    const secondsString = seconds.toString();
    let hourTime = hoursString;
    let minuteTime = minutesString;
    let secondTime = secondsString;

    if(hoursString <= 9) {
        hourTime = "0" + hoursString;
    }

    if(minutesString <= 9) {
        minuteTime = "0" + minutesString;
    }

    if(secondsString <= 9) {
        secondTime = "0" + secondsString;
    }

    let firstHourTime = hourTime.slice(0,1);
    let secondHourTime = hourTime.slice(1,2);
    let firstMinuteTime = minuteTime.slice(0,1);
    let secondMinuteTime = minuteTime.slice(1,2);
    let firstSecondTime = secondTime.slice(0,1);
    let secondSecondTime = secondTime.slice(1,2);

    switch (firstHourTime) {
        case '1':
            document.getElementById("hourFirstUp").style.cssText = oneUp;
            document.getElementById("hourFirstDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("hourFirstUp").style.cssText = twoUp;
            document.getElementById("hourFirstDown").style.cssText = twoDown;
        default:
            document.getElementById("hourFirstUp").style.cssText = zeroUp;
            document.getElementById("hourFirstDown").style.cssText = zeroDown;
    }

    switch (secondHourTime) {
        case '1':
            document.getElementById("hourSecondUp").style.cssText = oneUp;
            document.getElementById("hourSecondDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("hourSecondUp").style.cssText = twoUp;
            document.getElementById("hourSecondDown").style.cssText = twoDown;
            break;
        case '3':
            document.getElementById("hourSecondUp").style.cssText = threeUp;
            document.getElementById("hourSecondDown").style.cssText = threeDown;
            break;
        case '4':
            document.getElementById("hourSecondUp").style.cssText = fourUp;
            document.getElementById("hourSecondDown").style.cssText = fourDown;
            break;
        case '5':
            document.getElementById("hourSecondUp").style.cssText = fiveUp;
            document.getElementById("hourSecondDown").style.cssText = fiveDown;
            break;
        case '6':
            document.getElementById("hourSecondUp").style.cssText = sixUp;
            break;
        case '7':
            document.getElementById("hourSecondUp").style.cssText = sevenUp;
            document.getElementById("hourSecondDown").style.cssText = sevenDown;
            break;
        case '8':
            break;
        case '9':
            document.getElementById("hourSecondDown").style.cssText = nineDown;
            break;
        default:
            document.getElementById("hourSecondUp").style.cssText = zeroUp;
            document.getElementById("hourSecondDown").style.cssText = zeroDown;
            break;
    }

    switch(firstMinuteTime) {
        case '1':
            document.getElementById("minutesFirstUp").style.cssText = oneUp;
            document.getElementById("minutesFirstDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("minutesFirstUp").style.cssText = twoUp;
            document.getElementById("minutesFirstDown").style.cssText = twoDown;
            break;
        case '3':
            document.getElementById("minutesFirstUp").style.cssText = threeUp;
            document.getElementById("minutesFirstDown").style.cssText = threeDown;
            break;
        case '4':
            document.getElementById("minutesFirstUp").style.cssText = fourUp;
            document.getElementById("minutesFirstDown").style.cssText = fourDown;
            break;
        case '5':
            document.getElementById("minutesFirstUp").style.cssText = fiveUp;
            document.getElementById("minutesFirstDown").style.cssText = fiveDown;
            break;
        default:
            document.getElementById("minutesFirstUp").style.cssText = zeroUp;
            document.getElementById("minutesFirstDown").style.cssText = zeroDown;

    }

    switch (secondMinuteTime) {
        case '1':
            document.getElementById("minutesSecondUp").style.cssText = oneUp;
            document.getElementById("minutesSecondDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("minutesSecondUp").style.cssText = twoUp;
            document.getElementById("minutesSecondDown").style.cssText = twoDown;
            break;
        case '3':
            document.getElementById("minutesSecondUp").style.cssText = threeUp;
            document.getElementById("minutesSecondDown").style.cssText = threeDown;
            break;
        case '4':
            document.getElementById("minutesSecondUp").style.cssText = fourUp;
            document.getElementById("minutesSecondDown").style.cssText = fourDown;
            break;
        case '5':
            document.getElementById("minutesSecondUp").style.cssText = fiveUp;
            document.getElementById("minutesSecondDown").style.cssText = fiveDown;
            break;
        case '6':
            document.getElementById("minutesSecondUp").style.cssText = sixUp;
            break;
        case '8':
            break;
        case '7':
            document.getElementById("minutesSecondUp").style.cssText = sevenUp;
            document.getElementById("minutesSecondDown").style.cssText = sevenDown;
            break;
        case '9':
            document.getElementById("minutesSecondDown").style.cssText = nineDown;
            break;
        default:
            document.getElementById("minutesSecondUp").style.cssText = zeroUp;
            document.getElementById("minutesSecondDown").style.cssText = zeroDown;
    }

    switch (firstSecondTime) {
        case '1':
            document.getElementById("secondsFirstUp").style.cssText = oneUp;
            document.getElementById("secondsFirstDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("secondsFirstUp").style.cssText = twoUp;
            document.getElementById("secondsFirstDown").style.cssText = twoDown;
            break;
        case '3':
            document.getElementById("secondsFirstUp").style.cssText = threeUp;
            document.getElementById("secondsFirstDown").style.cssText = threeDown;
            break;
        case '4':
            document.getElementById("secondsFirstUp").style.cssText = fourUp;
            document.getElementById("secondsFirstDown").style.cssText = fourDown;
            break;
        case '5':
            document.getElementById("secondsFirstUp").style.cssText = fiveUp;
            document.getElementById("secondsFirstDown").style.cssText = fiveDown;
            break;
        default:
            document.getElementById("secondsFirstUp").style.cssText = zeroUp;
            document.getElementById("secondsFirstDown").style.cssText = zeroDown;
    }

    switch (secondSecondTime) {
        case '1':
            document.getElementById("secondsSecondUp").style.cssText = oneUp;
            document.getElementById("secondsSecondDown").style.cssText = oneDown;
            break;
        case '2':
            document.getElementById("secondsSecondUp").style.cssText = twoUp;
            document.getElementById("secondsSecondDown").style.cssText = twoDown;
            break;
        case '3':
            document.getElementById("secondsSecondUp").style.cssText = threeUp;
            document.getElementById("secondsSecondDown").style.cssText = threeDown;
            break;
        case '4':
            document.getElementById("secondsSecondUp").style.cssText = fourUp;
            document.getElementById("secondsSecondDown").style.cssText = fourDown;
            break;
        case '5':
            document.getElementById("secondsSecondUp").style.cssText = fiveUp;
            document.getElementById("secondsSecondDown").style.cssText = fiveDown;
            break;
        case '6':
            document.getElementById("secondsSecondUp").style.cssText = sixUp;
            break;
        case '7':
            document.getElementById("secondsSecondUp").style.cssText = sevenUp;
            document.getElementById("secondsSecondDown").style.cssText = sevenDown;
            break;
        case '8':
            break;
        case '9':
            document.getElementById("secondsSecondDown").style.cssText = nineDown;
            break;
        default:
            document.getElementById("secondsSecondUp").style.cssText = zeroUp;
            document.getElementById("secondsSecondDown").style.cssText = zeroDown;
    }

    setTimeout(startClock, 1000);
};

 export default startClock;