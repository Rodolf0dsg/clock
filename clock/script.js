let hourContainer = document.querySelector('.main-clock-hour');
let dateContainer = document.querySelector('.main-clock-day');

const DAYS_EN = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thur',
    5: 'Fri',
    6: 'Sat'
};

const MONTHS_EN = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
};

function format(number) {
    (number < 10)
        ? number = '0' + number
        : number = number; 
    return number;
};

function getFullDate() {
    let date = new Date();
    let fullHour = `${format(date.getHours())} : ${format(date.getMinutes())} : ${format(date.getSeconds())}`;
    let dayOfWeek = DAYS_EN[date.getDay()];
    let month = MONTHS_EN[date.getMonth()];
    let dayOfMonth = date.getDate();
    let fullDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    return [fullHour, fullDate];
};

function pushDate() {
    hourContainer.innerHTML = getFullDate()[0];
    dateContainer.innerHTML = getFullDate()[1];
};

setInterval(pushDate, 1000);