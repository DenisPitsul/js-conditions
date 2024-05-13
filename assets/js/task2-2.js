const day = Number(prompt("Input day from 1 to 31"));
let outputStr = "";

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        outputStr = `${day} - refers to the first decade`;
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        outputStr = `${day} - refers to the second decade`;
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        outputStr = `${day} - refers to the third decade`;
        break;
    default:
        outputStr = 'You entered not number from 1 to 31';
        break
}

document.write(`<p>${outputStr}</p>`);
