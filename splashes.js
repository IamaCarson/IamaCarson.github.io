
const splashList = ['2!', 'Oh boy!', 'American Cheese', 'Also try yugoslavia.best!', 'I <3 Videogames!', 'Barson', 'amogos', 'Arson', 'beangs', 'fecal funnies', 'wed!', '420!', 'cardbox was here :)', '9 + 10'];

function splash() {
    document.getElementById('splash').innerText = splashList[Math.floor(Math.random()*splashList.length)];
}

window.onload = splash; //load splash