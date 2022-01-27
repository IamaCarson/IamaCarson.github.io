const splashList = ['beans', 'lmaop'];

function splash() {
    t = document.getElementById('splash');
    splashAmount = splashList.length;
    t.innerHTML = splashList[Math.floor(Math.random()*splashAmount)];
}
