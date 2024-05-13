const isDay = confirm('Is day now?');

let className = '';
let dayTime = ''
if(isDay) {
    className = 'light';
    dayTime = 'day';
} else {
    className = 'dark'
    dayTime = 'night'
}

// рішення з тернарним оператором
// className = isDay ? 'light' : 'dark';
// dayTime = isDay ? 'day' : 'night';

document.write(`<p class="text ${className}">It is ${dayTime} now!</p>`);

