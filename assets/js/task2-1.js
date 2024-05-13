const day = +prompt('Input week day');
let dayStr = '';

switch(day) {
    case 1:
        dayStr = 'Monday';
        break;
    case 2:
        dayStr = 'Tuesday';
        break;
    case 3:
        dayStr = 'Wednesday';
        break;
    case 4:
        dayStr = 'Thursday';
        break;
    case 5:
        dayStr = 'Friday';
        break;
    case 6:
        dayStr = 'Saturday';
        break;
    case 7:
        dayStr = 'Sunday';
        break;
    default:
        dayStr = 'Day with this number does not exist';
        break;
}

document.write(`<p>${dayStr}</p>`)