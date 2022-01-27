
const splashList = ['2!', 'Oh boy!', 'American Cheese', 'Also try yugoslavia.best!', 'I <3 Videogames!'];

function splash() {
    document.getElementById('splash').innerText = splashList[Math.floor(Math.random()*splashList.length)];
}

window.onload = splash; //load splash
